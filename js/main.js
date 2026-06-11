const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.getElementById('mainNavbar');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
