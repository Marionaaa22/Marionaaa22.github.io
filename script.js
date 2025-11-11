document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];

  function toggleMenu() {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // opcional: para bloquear scroll si lo deseas
  }

  menuToggle.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      // cierra el menú al navegar a una sección (útil en móvil)
      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });
});