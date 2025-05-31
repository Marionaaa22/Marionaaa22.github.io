document.addEventListener('DOMContentLoaded', function() {
    // Animaciones de intersección
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Ocultar menú al hacer clic en un elemento (solo si está visible)
    const menu = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('show')) {  // ajusta esta clase según tu CSS para menú visible
                menu.classList.remove('show');
            }
        });
    });
    
});
