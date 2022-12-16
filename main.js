// change NAV style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

//Swiper JS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        999: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        1079: {
            slidesPerView: 4,
            spaceBetween: 45
        }
    }
});