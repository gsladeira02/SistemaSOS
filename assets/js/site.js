
const mobileToggle = document.querySelector('[data-mobile-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', navLinks.classList.contains('open') ? 'true' : 'false');
  });
}

document.querySelectorAll('[data-faq]').forEach((item) => {
  const button = item.querySelector('button');
  if (!button) return;
  button.addEventListener('click', () => item.classList.toggle('open'));
});
