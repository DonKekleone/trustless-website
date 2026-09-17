const menuBtn = document.querySelector('[data-menu-button]');
const mainNav = document.querySelector('[data-main-nav]');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
