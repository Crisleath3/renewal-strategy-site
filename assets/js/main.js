/* Minimal JS for smooth UX */
(() => {
  // Update year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());

  // Navbar shadow on scroll
  const nav = document.querySelector('.navbar');
  const onScroll = () => {
    if (!nav) return;
    nav.style.boxShadow = window.scrollY > 6 ? '0 10px 24px rgba(2,6,23,.10)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
