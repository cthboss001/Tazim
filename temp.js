
  // =============================================
  // DOWNLOAD ANIMATION
  // =============================================
  let DOWNLOAD_URL = 'https://github.com/cthboss001/Retina-Rest-Releases/releases/latest';

  // Automatically fetch the latest Windows .exe release from GitHub API
  fetch('https://api.github.com/repos/cthboss001/Retina-Rest-Releases/releases/latest')
    .then(res => res.json())
    .then(data => {
      const exeAsset = data.assets.find(a => a.name.endsWith('.exe'));
      if (exeAsset) {
        DOWNLOAD_URL = exeAsset.browser_download_url;
        
        // Update fallback link immediately
        const fallback = document.getElementById('dlFallback');
        if (fallback) fallback.href = DOWNLOAD_URL;
        
        // Update file size and name display
        const mb = (exeAsset.size / (1024 * 1024)).toFixed(1);
        const sub = document.getElementById('dlSub');
        if (sub) sub.textContent = `${exeAsset.name} · ~${mb} MB`;
      }
    })
    .catch(err => console.error("Could not fetch latest release:", err));

  function startDownload() {
    const overlay = document.getElementById('dlOverlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const arc   = document.getElementById('dlArc');
    const pct   = document.getElementById('dlPct');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const sub   = document.getElementById('dlSub');
    const closeBtn = document.getElementById('dlCloseBtn');
    const circumference = 2 * Math.PI * 52; // 326.7

    let progress = 0;

    function setProgress(p) {
      progress = p;
      arc.style.strokeDashoffset = circumference - (circumference * p / 100);
      pct.textContent = Math.round(p) + '%';
    }

    // Stage 1: 0 → 35% (connecting)
    const t1 = setTimeout(() => { step1.classList.add('done'); }, 600);

    // Animate progress smoothly in stages
    let rafId;
    let start = null;
    function animateTo(target, duration, cb) {
      const from = progress;
      if (start) cancelAnimationFrame(rafId);
      function step(ts) {
        if (!start) start = ts;
        const elapsed = ts - start;
        const t = Math.min(elapsed / duration, 1);
        // ease-out
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(from + (target - from) * eased);
        if (t < 1) { rafId = requestAnimationFrame(step); }
        else { start = null; cb && cb(); }
      }
      rafId = requestAnimationFrame(step);
    }

    // Step 1: 0→35 in 700ms
    animateTo(35, 700, () => {
      step1.classList.add('done');
      // Step 2: 35→70 in 600ms
      setTimeout(() => {
        animateTo(70, 600, () => {
          step2.classList.add('done');
          sub.textContent = 'Preparing installer link…';
          // Step 3: 70→100 in 500ms
          setTimeout(() => {
            animateTo(100, 500, () => {
              step3.classList.add('done');
              pct.textContent = '✓';
              sub.textContent = 'Opening download…';

              // Trigger the actual download
              setTimeout(() => {
                // Use location.href instead of a.click() to avoid popup blockers
                window.location.href = DOWNLOAD_URL;

                sub.textContent = 'If download didn\'t start automatically, click below ↓';
                document.getElementById('dlFallback').style.display = 'inline-block';
                closeBtn.classList.add('show');
              }, 300);
            });
          }, 400);
        });
      }, 200);
    });
  }

  function closeDlOverlay() {
    document.getElementById('dlOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDlOverlay();
  });

  // =============================================
  // VIDEO EMBED
  // — Replace 'YOUR_VIDEO_ID' with YouTube video ID
  // =============================================
  const YOUTUBE_ID = 'YOUR_VIDEO_ID';

  function loadVideo() {
    if (YOUTUBE_ID === 'YOUR_VIDEO_ID') {
      window.open('https://www.youtube.com/@tazimhossen', '_blank');
      return;
    }
    const wrapper = document.getElementById('videoWrapper');
    const iframe = document.createElement('iframe');
    iframe.className = 'video-embed';
    iframe.src = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  }

  // =============================================
  // SCROLL FADE-IN
  // =============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .screenshot-card, .release-item, .stack-pill').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s ease`;
    observer.observe(el);
  });

