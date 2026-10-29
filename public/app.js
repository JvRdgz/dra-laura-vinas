const $ = (selector) => document.querySelector(selector);
document.querySelectorAll('a[href="#evidencia"]').forEach(link => link.addEventListener('click', () => { $('#evidencia').open = true; }));
const menu = $('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  $('#navigation').classList.toggle('open', open);
});
const closeMenu = () => {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menú');
  $('#navigation').classList.remove('open');
};
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion-ready');
}

// Manufacturer examples: gentle crossfade, visible-only autoplay and swipe controls.
const nordlysGallery = document.querySelector('.nordlys-photograph');
if (nordlysGallery) {
  const slides = [
    { src: '/images/candela-nordlys-completa.jpg', alt: 'Equipo Candela Nordlys completo sobre fondo blanco, incluidos los aplicadores y las ruedas', caption: 'EL EQUIPO · VISTA COMPLETA', width: 1089, height: 1800 },
    { src: '/images/nordlys-tratamiento-facial.webp', alt: 'Imagen de ejemplo de Candela: una profesional aplica Nordlys en el rostro de una paciente con protección ocular', caption: 'TRATAMIENTO FACIAL · EJEMPLO', width: 800, height: 500 },
    { src: '/images/nordlys-tratamiento-escote.webp', alt: 'Imagen de ejemplo de Candela: aplicación del cabezal PR 530 de Nordlys sobre el escote de una paciente', caption: 'TRATAMIENTO EN ESCOTE · EJEMPLO', width: 1000, height: 927 }
  ];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const stage = document.querySelector('#nordlys-gallery-stage');
  const viewport = document.createElement('div');
  viewport.className = 'nordlys-gallery-viewport';
  const firstImage = document.querySelector('#nordlys-gallery-image');
  firstImage.classList.add('is-active');
  viewport.append(firstImage);
  stage.append(viewport);
  const images = slides.map((slide, index) => {
    const image = index === 0 ? firstImage : document.createElement('img');
    image.src = slide.src;
    image.alt = slide.alt;
    image.width = slide.width;
    image.height = slide.height;
    image.draggable = false;
    image.decoding = 'async';
    image.classList.toggle('is-treatment', index !== 0);
    image.setAttribute('aria-hidden', String(index !== 0));
    if (index !== 0) viewport.append(image);
    return image;
  });
  const slideButtons = [...document.querySelectorAll('[data-nordlys-slide]')];
  const toggle = document.querySelector('#nordlys-gallery-toggle');
  const counter = document.querySelector('#nordlys-gallery-count');
  let currentSlide = 0;
  let request = 0;
  let timer;
  let paused = false;
  let hovering = false;
  let focused = false;
  let gesture = null;
  let visible = !('IntersectionObserver' in window);
  const canPlay = () => !paused && !reducedMotion.matches && visible && !document.hidden && !hovering && !focused && !gesture;
  function syncPlayback() {
    clearTimeout(timer);
    const label = reducedMotion.matches ? 'Reproducción automática desactivada por movimiento reducido' : paused ? 'Reanudar reproducción automática' : 'Pausar reproducción automática';
    toggle.textContent = paused || reducedMotion.matches ? '▷' : 'Ⅱ';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    toggle.disabled = reducedMotion.matches;
    if (canPlay()) timer = setTimeout(() => showNordlysSlide(currentSlide + 1, false), 4000);
  }
  async function showNordlysSlide(index, manual = true) {
    clearTimeout(timer);
    const target = (index + slides.length) % slides.length;
    const thisRequest = ++request;
    try { await images[target].decode(); } catch { syncPlayback(); return; }
    if (thisRequest !== request) return;
    if (!manual && !canPlay()) { syncPlayback(); return; }
    currentSlide = target;
    images.forEach((image, i) => {
      image.classList.toggle('is-active', i === currentSlide);
      image.setAttribute('aria-hidden', String(i !== currentSlide));
    });
    document.querySelector('#nordlys-gallery-caption').textContent = slides[currentSlide].caption;
    counter.setAttribute('aria-live', manual ? 'polite' : 'off');
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    slideButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === currentSlide)));
    syncPlayback();
  }
  document.querySelector('#nordlys-gallery-prev').addEventListener('click', () => showNordlysSlide(currentSlide - 1));
  document.querySelector('#nordlys-gallery-next').addEventListener('click', () => showNordlysSlide(currentSlide + 1));
  slideButtons.forEach(button => button.addEventListener('click', () => showNordlysSlide(Number(button.dataset.nordlysSlide))));
  toggle.addEventListener('click', () => { paused = !paused; syncPlayback(); });
  nordlysGallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showNordlysSlide(currentSlide + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  nordlysGallery.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; syncPlayback(); }
  });
  nordlysGallery.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') { hovering = false; syncPlayback(); }
  });
  nordlysGallery.addEventListener('focusin', () => { focused = true; syncPlayback(); });
  nordlysGallery.addEventListener('focusout', event => {
    if (!nordlysGallery.contains(event.relatedTarget)) { focused = false; syncPlayback(); }
  });
  stage.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
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
    if (Math.abs(dx) > Math.max(40, stage.clientWidth * .12) && Math.abs(dx) > Math.abs(dy) * 1.3) showNordlysSlide(currentSlide + (dx < 0 ? 1 : -1));
    else syncPlayback();
  });
  const cancelGesture = () => { gesture = null; syncPlayback(); };
  stage.addEventListener('pointercancel', cancelGesture);
  stage.addEventListener('lostpointercapture', () => { if (gesture) cancelGesture(); });
  // A release outside the image must not leave autoplay permanently suspended.
  window.addEventListener('pointerup', () => { if (gesture) cancelGesture(); });
  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener('change', syncPlayback);
  if ('IntersectionObserver' in window) {
    const playbackObserver = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .3;
      syncPlayback();
    }, { threshold: [0, .3] });
    playbackObserver.observe(nordlysGallery);
  }
  window.addEventListener('pagehide', () => clearTimeout(timer));
  window.addEventListener('pageshow', syncPlayback);
  syncPlayback();
}
