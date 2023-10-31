//burger-menu
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__navigation');
const menuLink = document.querySelectorAll('.item');


burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    burgerMenu.classList.toggle('close-menu');
    menu.classList.toggle('header__navigation-mobile');
})

document.body.addEventListener('click', (e) => {
    burgerMenu.classList.remove('close-menu');
    menu.classList.remove('header__navigation-mobile');
})

//slider
const slides = document.querySelectorAll('.slider-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    slides.forEach(item => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1)
})

next.addEventListener('click', () => {
    plusSlides(1)
})