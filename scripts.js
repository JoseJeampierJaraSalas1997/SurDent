document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        once: false,
        mirror: false,
        duration: 800,
        offset: 50
    });

    // Animación de entrada escalonada para los enlaces
    const links = document.querySelectorAll('.social-link');
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 100);
    });
});