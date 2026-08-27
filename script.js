// ==================== MOBILE NAVBAR ====================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ==================== CLOSE MENU AFTER CLICK ====================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==================== NAVBAR SCROLL EFFECT ====================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==================== CONTACT FORM ====================

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});


// ==================== CURRENT YEAR ====================

const footerText = document.querySelector(".footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} Faizan Satti. All Rights Reserved.`;