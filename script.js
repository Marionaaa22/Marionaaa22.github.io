document.addEventListener('DOMContentLoaded', function() {
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

    
    const menu = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.add('hidden');
        });
    });
});
