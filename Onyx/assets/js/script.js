// Enable strict mode to enforce more secure and modern JavaScript practices
"use strict";

// 
// * Navbar toggle 
// * This section of code handles the toggling of the navbar

// Select the HTML element with the attribute "data-overlay" and store it in the overlay variable
const overlay = document.querySelector("[data-overlay]");

// Select the HTML element with the attribute "data-navbar" and store it in the navbar variable
const navbar = document.querySelector("[data-navbar]");

// Select the HTML element with the attribute "data-nav-toggle-btn" and store it in the navToggleBtn variable
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

// Select all HTML elements with the attribute "data-nav-link" and store them in the navbarLinks variable
const navbarLinks = document.querySelectorAll("[data-nav-link]");

// Define a function called navToggleFunc that toggles the active class on several HTML elements
const navToggleFunc = function () {
  // Toggle the "active" class on the navToggleBtn element
  navToggleBtn.classList.toggle("active");
  // Toggle the "active" class on the navbar element
  navbar.classList.toggle("active");
  // Toggle the "active" class on the overlay element
  overlay.classList.toggle("active");
};

// Add an event listener to the navToggleBtn element that calls the navToggleFunc function when clicked
navToggleBtn.addEventListener("click", navToggleFunc);

// Add an event listener to the overlay element that calls the navToggleFunc function when clicked
overlay.addEventListener("click", navToggleFunc);

// Loop through each navbarLink element and add an event listener that calls the navToggleFunc function when clicked
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/* 
- Swiper js code
*/

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});