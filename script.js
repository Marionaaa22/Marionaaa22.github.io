document.addEventListener('DOMContentLoaded', function() {
    // Animaciones de intersección
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
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
        threshold: 0.1 // La cantidad de visibilidad que debe tener el elemento para activar la animación
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Ocultar menú al hacer clic en un elemento
    const menu = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.add('hidden');
        });
    });

    // Funcionalidad del carrusel
    const carousel = new bootstrap.Carousel('#carouselExampleCaptions', {
        interval: 3000, // Cambia cada 3 segundos
        ride: 'carousel'
    });
});