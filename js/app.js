/* =====================================================
   APP.JS — Shared Utilities, Cursor, Particles, Effects
   ===================================================== */

'use strict';

// ─── DOM HELPERS ─────────────────────────────────────────────────────────────
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

// ─── CUSTOM CURSOR ───────────────────────────────────────────────────────────
function initCursor() {
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (isTouchDevice) return;

  const dot = el('div'); dot.id = 'cursor-dot';
  const ring = el('div'); ring.id = 'cursor-ring';
  document.body.append(dot, ring);

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let raf = null;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateCursor() {
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(animateCursor);
  }

  raf = requestAnimationFrame(animateCursor);

  document.addEventListener('mousedown', () => {
    dot.style.width = '14px';
    dot.style.height = '14px';
  });
  document.addEventListener('mouseup', () => {
    dot.style.width = '';
    dot.style.height = '';
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

// ─── HOUR-BASED THEME ────────────────────────────────────────────────────────
function applyHourTheme() {
  const palette = Engine.getHourTheme(HOUR_PALETTES);
  document.documentElement.classList.add(`theme-${palette.theme}`);

  // Update any theme-display elements
  const themeEls = $$('[data-theme-name]');
  themeEls.forEach(e => e.textContent = palette.name);

  const themeEmojis = $$('[data-theme-emoji]');
  themeEmojis.forEach(e => e.textContent = palette.emoji);
}

// ─── PARTICLE CANVAS ──────────────────────────────────────────────────────────
function initParticles(canvasId = 'particle-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const PARTICLE_COUNT = 60;
  const hour = new Date().getHours();

  // Color based on hour
  const colors = hour < 6 ? ['#7B2FF7', '#FF006E', '#AAFF00'] :
                 hour < 12 ? ['#00E5FF', '#AAFF00', '#0077B6'] :
                 hour < 18 ? ['#FF3D00', '#AAFF00', '#FF006E'] :
                              ['#FF006E', '#7B2FF7', '#FF3D00'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 3 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.6 + 0.1;
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = 0.01 + Math.random() * 0.02;
  }

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.pulse += this.pulseSpeed;
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  };

  Particle.prototype.draw = function () {
    const alpha = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // Connect nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 100) * 0.08;
          ctx.strokeStyle = particles[i].color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  let animating = true;
  function loop() {
    if (!animating) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  loop();

  // Pause when tab not visible
  document.addEventListener('visibilitychange', () => {
    animating = !document.hidden;
    if (animating) loop();
  });
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function initMarquee() {
  const tracks = $$('.marquee-track');
  tracks.forEach(track => {
    // Duplicate items for seamless loop
    const items = [...track.children];
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  });
}

function buildMarquee(containerSel, facts) {
  const container = document.querySelector(containerSel);
  if (!container) return;

  const items = Engine.shuffleArray(facts);
  const html = items.map(f =>
    `<span class="marquee-item">${f}<span class="marquee-sep">✦</span></span>`
  ).join('');

  container.innerHTML = html + html; // doubled for loop
}

// ─── SCROLL OBSERVER ──────────────────────────────────────────────────────────
function initScrollObserver() {
  const revealEls = $$('.reveal');
  if (!revealEls.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(e => obs.observe(e));
}

// ─── SCROLL PROGRESS BAR ──────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(scrolled / total) * 100}%`;
  }, { passive: true });
}

// ─── BACK TO TOP ──────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    AudioEngine.play('whoosh');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── CAROUSEL ────────────────────────────────────────────────────────────────
function initCarousels() {
  $$('.carousel-outer').forEach(outer => {
    const carousel = outer.querySelector('.carousel');
    if (!carousel) return;

    const prevBtn = outer.querySelector('[data-carousel-prev]');
    const nextBtn = outer.querySelector('[data-carousel-next]');
    const countEl = outer.querySelector('.carousel-count');

    let currentIdx = 0;

    // Query items FRESH every call — content may be added after init
    function getItems() {
      return [...carousel.querySelectorAll('.carousel-item')];
    }

    function getGap() {
      const s = window.getComputedStyle(carousel);
      return parseFloat(s.columnGap || s.gap || '0') || 0;
    }

    function getStep() {
      const items = getItems();
      if (!items.length) return 0;
      return items[0].getBoundingClientRect().width + getGap();
    }

    function updateCount() {
      const items = getItems();
      if (!countEl || !items.length) return;
      const step = getStep();
      currentIdx = step > 0 ? Math.round(carousel.scrollLeft / step) : 0;
      currentIdx = Math.max(0, Math.min(currentIdx, items.length - 1));
      countEl.textContent = `${currentIdx + 1} / ${items.length}`;
    }

    function navigate(dir) {
      const items = getItems();
      if (!items.length) return;
      const newIdx = Math.max(0, Math.min(currentIdx + dir, items.length - 1));
      carousel.scrollTo({ left: items[newIdx].offsetLeft, behavior: 'smooth' });
      currentIdx = newIdx;
      setTimeout(updateCount, 400);
      if (typeof AudioEngine !== 'undefined') AudioEngine.play('cardFlip');
    }

    // onclick assignment is safe to overwrite on re-init — no duplicate listeners
    if (prevBtn) prevBtn.onclick = () => navigate(-1);
    if (nextBtn) nextBtn.onclick = () => navigate(1);

    // Attach scroll sync only once per carousel
    if (!carousel._scrollInited) {
      carousel._scrollInited = true;
      let scrollTimer;
      carousel.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateCount, 120);
      }, { passive: true });
    }

    // Defer count update two frames so dynamically-built content can render
    requestAnimationFrame(() => requestAnimationFrame(updateCount));
  });
}

// ─── CARD TILT (3D) ───────────────────────────────────────────────────────────
function initCardTilt() {
  $$('.card-tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(8px)`;
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ─── MAGNETIC BUTTONS ─────────────────────────────────────────────────────────
function initMagneticBtns() {
  $$('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    }, { passive: true });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type = 'info', duration = 3200) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = el('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = el('div', `toast ${type}`, msg);
  container.appendChild(toast);

  setTimeout(() => toast.remove(), duration);
}

// ─── LOADING SCREEN ───────────────────────────────────────────────────────────
function initLoader() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  const bar = screen.querySelector('.loader-bar');
  const text = screen.querySelector('.loader-text');

  const msgs = ['LOADING PLAYBOOK...', 'PATCHING INPUTS...', 'SCANNING RF...', 'FOCUSING LIGHTS...', 'ALMOST THERE...'];
  let step = 0;

  const interval = setInterval(() => {
    step++;
    if (bar) bar.style.width = `${(step / msgs.length) * 100}%`;
    if (text) text.textContent = msgs[step - 1] || msgs[msgs.length - 1];
    if (step >= msgs.length) {
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('hidden');
        AudioEngine.play('quizStart');
      }, 300);
    }
  }, 200);
}

// ─── SOUND TOGGLE ────────────────────────────────────────────────────────────
function initSoundToggle() {
  const btn = document.getElementById('sound-toggle');
  if (!btn) return;

  function updateBtn() {
    btn.textContent = AudioEngine.isEnabled() ? '🔊' : '🔇';
    btn.title = AudioEngine.isEnabled() ? 'Mute sounds' : 'Enable sounds';
  }

  btn.addEventListener('click', () => {
    AudioEngine.setEnabled(!AudioEngine.isEnabled());
    updateBtn();
    if (AudioEngine.isEnabled()) AudioEngine.play('click');
  });

  updateBtn();
}

// ─── NAV MOBILE ──────────────────────────────────────────────────────────────
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    AudioEngine.play('whoosh');
  });

  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

// ─── ACTIVE NAV LINK ──────────────────────────────────────────────────────────
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// ─── RENDER QOTD ──────────────────────────────────────────────────────────────
function renderQOTD(containerSel) {
  const container = document.querySelector(containerSel);
  if (!container) return;

  const quote = Engine.getDailyQuote(QUOTES);
  const catColors = {
    lighting: '#7B2FF7',
    sound: '#00E5FF',
    rf: '#FF6D00',
    advanced: '#FF006E'
  };

  container.innerHTML = `
    <div class="qotd-card" style="border-top: 4px solid ${catColors[quote.cat] || '#FF3D00'}">
      <div class="card-tag ${quote.cat}">Quote of the Day · ${quote.cat.toUpperCase()}</div>
      <p class="qotd-text">"${quote.text}"</p>
      <div class="qotd-source">— ${quote.source}</div>
    </div>
  `;
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const initial = parseInt(el.textContent) || 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(initial + (target - initial) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ─── COUNTER OBSERVERS ────────────────────────────────────────────────────────
function initCounters() {
  const counters = $$('[data-count-to]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.countTo);
        animateCounter(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

// ─── SOUND INIT ON FIRST INTERACTION ─────────────────────────────────────────
function initAudioOnInteraction() {
  const unlock = () => {
    AudioEngine.init();
    document.removeEventListener('click', unlock);
    document.removeEventListener('keydown', unlock);
  };
  document.addEventListener('click', unlock, { once: true });
  document.addEventListener('keydown', unlock, { once: true });
}

// ─── HOVER SOUNDS ────────────────────────────────────────────────────────────
function initHoverSounds() {
  document.addEventListener('mouseover', e => {
    if (e.target.matches('button, .btn, a[href], .quiz-option, .tag, .mode-card')) {
      AudioEngine.play('hover');
    }
  }, { passive: true });

  document.addEventListener('click', e => {
    if (e.target.matches('button, .btn, a[href]')) {
      AudioEngine.play('click');
    }
  }, { passive: true });
}

// ─── GLOBAL INIT ──────────────────────────────────────────────────────────────
function initApp() {
  applyHourTheme();
  initCursor();
  initScrollProgress();
  initBackToTop();
  initScrollObserver();
  initCounters();
  initCarousels();
  initCardTilt();
  initMagneticBtns();
  initMobileNav();
  setActiveNavLink();
  initSoundToggle();
  initAudioOnInteraction();
  initHoverSounds();
  initLoader();
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export
window.App = {
  $, $$, el,
  showToast,
  renderQOTD,
  buildMarquee,
  initParticles,
  initMarquee,
  initCarousels,
  animateCounter,
  applyHourTheme
};
