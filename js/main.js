
const menuButton = document.querySelector('.mobile-menu-button');
const navWrap = document.querySelector('.nav-wrap');

if (menuButton && navWrap) {
  menuButton.addEventListener('click', () => navWrap.classList.toggle('open'));
}

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.getAttribute('data-copy-email');
    try {
      await navigator.clipboard.writeText(email);
      const old = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = old, 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});
