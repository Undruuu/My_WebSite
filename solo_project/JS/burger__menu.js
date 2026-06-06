document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger__menu');
    const nav = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});