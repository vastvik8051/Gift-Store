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

}, 6000);


// notif tab 
const products = document.querySelector(".categories");

const popup = document.querySelector(".hamper-popup");
const mini = document.querySelector(".hamper-mini");
const closeBtn = document.querySelector(".close-popup");

let shown = false;

window.addEventListener("scroll", () => {

    if(shown) return;

    const sectionTop = products.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if(scrollPos > sectionTop + 150){

        shown = true;

        popup.classList.add("show");

        setTimeout(() => {

            popup.classList.remove("show");
            mini.classList.add("show");

        }, 5000);

    }

});

closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");
    mini.classList.add("show");

});

mini.addEventListener("click", () => {

    popup.classList.add("show");
    mini.classList.remove("show");

});