// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-icon');
    const navLinks = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
