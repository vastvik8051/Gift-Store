// hamburger
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


/* HERO SLIDER */

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

/* AUTO SLIDE EVERY 4 SECONDS */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);