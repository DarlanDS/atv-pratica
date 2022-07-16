/* Abre e fecha menu para mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-card-list")
        ? menuMobile.classList.replace("bi-card-list","bi-x")
        : menuMobile.classList.replace("bi-x", "bi-card-list");
    body.classList.toggle("menu-nav-active");
});