const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    try {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector('.navbar__menu a[href*=' + sectionId + ']')
                    .classList.add('active-link');
            } else {
                document
                    .querySelector('.navbar__menu a[href*=' + sectionId + ']')
                    .classList.remove('active-link');
            }
        });
    } catch (error) {
        console.log(error);
    }
}
window.addEventListener('scroll', scrollActive);


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 400,
    reset: true,
});

sr.reveal(`.animate-team`);

sr.reveal(
    `.animate-home, .animate-services, .animate-kontakt_text, .footer__desc`,
    {
        origin: 'left',
        interval: 100,
    }
);
sr.reveal(`.footer__title, .footer__link`, {
    origin: 'bottom',
    interval: 100,
});
sr.reveal(`.services__img`, { origin: 'right' });
sr.reveal(`.kontakt-image`, { origin: 'bottom' });
