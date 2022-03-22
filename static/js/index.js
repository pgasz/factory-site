const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
menuLinks.addEventListener('click', mobileMenu);

/*=============== CHANGE BACKGROUND NAVBAR ===============*/
function scrollNavbar() {
    const header = document.querySelector('.sticky-nav');
    if (this.scrollY >= 50) header.classList.add('show-nav');
    else header.classList.remove('show-nav');
}
window.addEventListener('scroll', scrollNavbar);
