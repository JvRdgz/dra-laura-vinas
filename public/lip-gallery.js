const gallery = document.querySelector('.lip-carousel');
if (gallery) {
  const stage = gallery.querySelector('.lip-carousel-viewport');
  const slides = [...gallery.querySelectorAll('.lip-slide')];
  const images = slides.map(slide => slide.querySelector('img'));
  const dots = [...gallery.querySelectorAll('[data-lip-index]')];
  const toggle = gallery.querySelector('#lip-gallery-toggle');
  const counter = gallery.querySelector('#lip-gallery-count');
  const source = gallery.querySelector('#lip-gallery-source');
  const dates = ['7 enero 2026', '6 enero 2026'];
  slides.forEach(slide => { slide.querySelector('a').draggable = false; });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let request = 0;
  let timer;
  let paused = false;
  let hovering = false;
  let focused = false;
  let gesture = null;
  let suppressClick = false;
  let visible = !('IntersectionObserver' in window);
  const canPlay = () => !paused && !reducedMotion.matches && visible && !document.hidden && !hovering && !focused && !gesture;

  function syncPlayback() {
    clearTimeout(timer);
    const label = reducedMotion.matches ? 'Reproducción automática desactivada por movimiento reducido' : paused ? 'Reanudar carrusel de labios' : 'Pausar carrusel de labios';
    toggle.textContent = paused || reducedMotion.matches ? '▷' : 'Ⅱ';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    toggle.disabled = reducedMotion.matches;
    if (canPlay()) timer = setTimeout(() => showSlide(current + 1, false), 4000);
  }

  async function showSlide(index, manual = true) {
    clearTimeout(timer);
    const target = (index + slides.length) % slides.length;
    const thisRequest = ++request;
    try { await images[target].decode(); } catch { syncPlayback(); return; }
    if (thisRequest !== request) return;
    if (!manual && !canPlay()) { syncPlayback(); return; }
    current = target;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      slide.inert = i !== current;
    });
    source.href = slides[current].querySelector('a').href;
    source.textContent = `${dates[current]} · Ver en Instagram ↗`;
    counter.setAttribute('aria-live', manual ? 'polite' : 'off');
    counter.textContent = `${current + 1} / ${slides.length}`;
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    syncPlayback();
  }

  gallery.querySelector('#lip-gallery-prev').addEventListener('click', () => showSlide(current - 1));
  gallery.querySelector('#lip-gallery-next').addEventListener('click', () => showSlide(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.lipIndex))));
  toggle.addEventListener('click', () => { paused = !paused; syncPlayback(); });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  gallery.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; syncPlayback(); }
  });
  gallery.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') { hovering = false; syncPlayback(); }
  });
  gallery.addEventListener('focusin', () => { focused = true; syncPlayback(); });
  gallery.addEventListener('focusout', event => {
    if (!gallery.contains(event.relatedTarget)) { focused = false; syncPlayback(); }
  });

  stage.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    suppressClick = false;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY };
    syncPlayback();
  });
  stage.addEventListener('pointermove', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) {
      gesture = null; syncPlayback(); return;
    }
    if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    if (Math.abs(dx) > Math.max(40, stage.clientWidth * .12) && Math.abs(dx) > Math.abs(dy) * 1.3) {
      suppressClick = true;
      showSlide(current + (dx < 0 ? 1 : -1));
    } else syncPlayback();
  });
  // A horizontal gesture changes the slide; only an intentional tap opens Instagram.
  stage.addEventListener('click', event => {
    if (suppressClick) { event.preventDefault(); event.stopPropagation(); suppressClick = false; }
  }, true);
  const cancelGesture = () => { gesture = null; syncPlayback(); };
  stage.addEventListener('pointercancel', cancelGesture);
  stage.addEventListener('lostpointercapture', () => { if (gesture) cancelGesture(); });
  window.addEventListener('pointerup', () => { if (gesture) cancelGesture(); });
  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener('change', syncPlayback);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .3;
      syncPlayback();
    }, { threshold: [0, .3] }).observe(gallery);
  }
  window.addEventListener('pagehide', () => clearTimeout(timer));
  window.addEventListener('pageshow', syncPlayback);
  gallery.querySelector('.lip-gallery-controls').hidden = false;
  syncPlayback();
}
