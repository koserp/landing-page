'use strict';

const goTop = document.querySelector('.go__top');
const header = document.querySelector('.header');
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        goTop.classList.add('active');
        header.classList.add('active');
    }
    else {
        goTop.classList.remove('active');
        header.classList.remove('active');
    }
});


const navbarToggler = document.querySelector(".navbar-toggle-btn");
const navbar = document.querySelector(".navbar__links");

navbarToggler.addEventListener("click", () => {
  // navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
  navbar.classList.toggle("active");
});
