document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (button && nav) {
    const setMenu = (open) => {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('open', open);
    };
    button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !button.contains(event.target)) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenu(false);
        button.focus();
      }
    });
  }
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav [data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('.form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) note.textContent = 'Thanks. This preview form does not send or store your information.';
  }));
});
