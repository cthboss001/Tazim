/* =====================================================
   Visitor Tracking — Supabase backend (per-page stats)
   ===================================================== */

const SUPABASE_URL  = 'https://mzokcopocvmmdipmaxpz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16b2tjb3BvY3ZtbWRpcG1heHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODM3NzMsImV4cCI6MjA5ODA1OTc3M30.rQbba7hG3Ymgj-9tDy1UAa4enYu_gzVxpoO8A16uYjE';

const UUID_KEY = 'tazim_visitor_uuid';

function getOrCreateUUID() {
    let uuid = localStorage.getItem(UUID_KEY);
    if (!uuid) {
        uuid = crypto.randomUUID();
        localStorage.setItem(UUID_KEY, uuid);
    }
    return uuid;
}

function getPage() {
    const path = window.location.pathname;
    return (path === '/index.html' ? '/' : path) || '/';
}

function todayISO() {
    return new Date().toISOString().slice(0, 10);
}

function isNewVisitToday(page) {
    return localStorage.getItem(`tazim_visited_${page}`) !== todayISO();
}

function markVisitedToday(page) {
    localStorage.setItem(`tazim_visited_${page}`, todayISO());
}

async function recordVisit(uuid, page) {
    await fetch(`${SUPABASE_URL}/rest/v1/rpc/record_visit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON,
            'Authorization': `Bearer ${SUPABASE_ANON}`
        },
        body: JSON.stringify({ p_uuid: uuid, p_date: todayISO(), p_page: page })
    });
}

async function fetchVisitorCounts(page) {
    const res = await fetch(
        `${SUPABASE_URL}/rest/v1/visitor_stats?page=eq.${encodeURIComponent(page)}&select=daily_count,alltime_count`,
        {
            headers: {
                'apikey': SUPABASE_ANON,
                'Authorization': `Bearer ${SUPABASE_ANON}`
            }
        }
    );
    const rows = await res.json();
    return rows[0] ?? { daily_count: 0, alltime_count: 0 };
}

function renderVisitorWidget(daily, alltime) {
    const fmt = n => Number(n).toLocaleString();
    const dailyEl   = document.getElementById('stat-daily');
    const alltimeEl = document.getElementById('stat-alltime');
    if (dailyEl)   dailyEl.textContent   = fmt(daily);
    if (alltimeEl) alltimeEl.textContent = fmt(alltime);
}

async function initVisitorTracking() {
    const uuid = getOrCreateUUID();
    const page = getPage();

    if (isNewVisitToday(page)) {
        markVisitedToday(page);
        recordVisit(uuid, page).catch(() => {});
    }

    try {
        const counts = await fetchVisitorCounts(page);
        renderVisitorWidget(counts.daily_count, counts.alltime_count);
    } catch (_) {
        document.getElementById('visitor-widget')?.remove();
    }
}

document.addEventListener('DOMContentLoaded', initVisitorTracking);
