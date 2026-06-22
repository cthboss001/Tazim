// Dodge Challenger Hero Orbit — vanilla JS / Canvas, no dependencies
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const CYAN = '#00D9FF';
  const CAR_W = 150;   // px — must match viewBox aspect ratio
  const CAR_H = 48;    // px — viewBox 0 0 280 90 → ratio 3.11:1 → 150x48
  const ORBIT_MS = 25000;
  const TRAIL_MAX = 32;

  /*
   * Dodge Challenger (2008+) side silhouette, facing RIGHT.
   * viewBox 0 0 280 90 (ratio 3.11:1 matches CAR_W:CAR_H)
   *
   * Key proportions:
   *   Roof    y=13   (flat, wide)
   *   Beltline y=43
   *   Sill    y=56
   *   Bottom  y=74
   *   Ground  y=88
   *   Rear wheel  cx=52  cy=75  r=13  (bottom touches y=88)
   *   Front wheel cx=220 cy=75  r=13
   *
   * Distinctive Challenger details:
   *   - VERY long, flat hood  (x=175→x=268)
   *   - Nearly VERTICAL C-pillar  (x=72→83 while y=41→16)
   *   - Short rear deck
   *   - Thick formal roofline
   */
  const SVG = `<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 90" width="${CAR_W}" height="${CAR_H}" aria-hidden="true">
  <defs>
    <filter id="chall-glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <g filter="url(#chall-glow)" fill="${CYAN}">
    <!-- ── Main body shell ── -->
    <path d="
      M 13,74
      L 13,62
      L 17,55  L 24,51  L 38,47  L 53,45
      L 63,43  L 72,41
      L 78,34  L 81,23  L 83,16
      L 90,13  L 154,13
      L 160,14 L 162,20 L 164,30 L 168,40 L 172,47
      L 178,53 L 192,55 L 222,55 L 252,56
      L 262,58 L 268,62 L 271,67 L 272,72 L 272,74
      Z
    "/>
    <!-- ── Rear wheel (tyre) ── -->
    <circle cx="52" cy="75" r="13"/>
    <!-- ── Front wheel (tyre) ── -->
    <circle cx="220" cy="75" r="13"/>
  </g>

  <!-- Wheel hubs (dark centres) -->
  <circle cx="52"  cy="75" r="6.5" fill="#050a14"/>
  <circle cx="220" cy="75" r="6.5" fill="#050a14"/>

  <!-- Rear window  (inside C-pillar → B-pillar) -->
  <path d="M 82,40 L 79,23 L 83,16 L 90,15 L 122,15 L 122,40 Z"
        fill="#050a14"/>

  <!-- Front window / windshield  (B-pillar → A-pillar) -->
  <path d="M 126,40 L 126,15 L 154,15 L 160,16 L 162,21 L 164,31 L 168,40 Z"
        fill="#050a14"/>

  <!-- Taillight strip -->
  <rect x="11"  y="59" width="4" height="11" rx="1" fill="#ff3333" opacity="0.9"/>
  <!-- Headlight strip -->
  <rect x="268" y="60" width="5" height="9"  rx="1" fill="#e8f0ff" opacity="0.95"/>
</svg>`;

  /* ─── orbit animation ─────────────────────────────────────── */

  function startChallenger() {
    if (window.innerWidth < 768) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'challenger-orbit';

    const trailCanvas = document.createElement('canvas');
    trailCanvas.id = 'challenger-trail';

    const carEl = document.createElement('div');
    carEl.id = 'challenger-car';
    carEl.innerHTML = SVG;

    wrapper.appendChild(trailCanvas);
    wrapper.appendChild(carEl);
    hero.insertBefore(wrapper, hero.firstChild);

    const ctx = trailCanvas.getContext('2d');
    const trail = [];
    let heroW, heroH, cx, cy, rx, ry;
    let rafId = null;
    let startTime = null;
    let resizeTimer = null;

    function updateDimensions() {
      heroW = hero.offsetWidth;
      heroH = hero.offsetHeight;
      trailCanvas.width  = heroW;
      trailCanvas.height = heroH;
      cx = heroW * 0.5;
      cy = heroH * 0.5;
      rx = heroW * 0.44;
      ry = heroH * 0.38;
      trail.length = 0;
    }

    updateDimensions();

    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth < 768) {
          wrapper.style.display = 'none';
          if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        } else {
          wrapper.style.display = '';
          updateDimensions();
          if (!rafId) { startTime = null; rafId = requestAnimationFrame(tick); }
        }
      }, 150);
    });

    // Fade in after layout settles
    carEl.style.opacity = '0';
    carEl.style.transition = 'opacity 0.9s ease';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { carEl.style.opacity = '1'; });
    });

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      const t = ((timestamp - startTime) % ORBIT_MS) / ORBIT_MS * (Math.PI * 2);

      // Position on ellipse
      const x = cx + rx * Math.cos(t);
      const y = cy + ry * Math.sin(t);

      // Tangent = direction of travel → rotation angle
      // With transform-origin 50% 50%, translate(x-W/2, y-H/2) places the
      // element centre at (x,y); rotate then pivots around that same centre.
      const angle = Math.atan2(ry * Math.cos(t), -rx * Math.sin(t));
      carEl.style.transform =
        `translate(${x - CAR_W / 2}px,${y - CAR_H / 2}px) rotate(${angle}rad)`;

      // Trail
      trail.push({ x: x, y: y });
      if (trail.length > TRAIL_MAX) trail.shift();

      ctx.clearRect(0, 0, heroW, heroH);
      for (var i = 1; i < trail.length; i++) {
        var p = i / trail.length;
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        ctx.strokeStyle = 'rgba(0,217,255,' + (p * 0.15) + ')';
        ctx.lineWidth = p * 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    // Pause rAF when hero is off-screen (saves CPU)
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        } else if (!rafId && window.innerWidth >= 768) {
          startTime = null;
          rafId = requestAnimationFrame(tick);
        }
      });
    }).observe(hero);
  }

  // Defer until the intro animation clears
  var overlay    = document.getElementById('intro-overlay');
  var introSeen  = sessionStorage.getItem('introSeen_v4');

  if (introSeen || !overlay || overlay.classList.contains('hidden')) {
    startChallenger();
  } else {
    var obs = new MutationObserver(function () {
      if (overlay.classList.contains('hidden')) {
        obs.disconnect();
        setTimeout(startChallenger, 400);
      }
    });
    obs.observe(overlay, { attributes: true, attributeFilter: ['class'] });
  }
})();
