// when we click the hamburger menu,
// the nav-menu goes to position static
// 

// const burgerButton = document.getElementById("hamburger");
// const menu = document.getElementById("nav-menu");
// const navLinks = document.querySelector(".nav-link");

// burgerButton.addEventListener("click", function(){
//     menu.classList.toggle("nav-menu-present");
//     console.log(menu);
// });
/* HEADER */

// FOR BUTTON DROP DOWN

// Make a function that will drop down a menu.
// Clickable, and hover. (will go away when not clicked?)

// IF CLICKED, THEN MENU SHOWS. MENU STAYS WHEN IS HOVERED. WHEN YOU MOVE OFF MENU THEN IT COLLAPSE.
var mobileMenu = document.getElementById("mobile-menu");
var navLinks = document.getElementById("nav-links-container");
// X button
var mobileClose = document.getElementById("mobileClose");
// Hamburger
var mobileOpen = document.getElementById("mobileOpen");

mobileMenu.addEventListener("click", function () {
	// Toggle Menu Appear
	navLinks.classList.toggle("hidden");
	mobileClose.classList.toggle("hidden");
	mobileOpen.classList.toggle("hidden");
});


// light/dark mode
const switchPage = document.querySelector(".switch");
// Switch to Light Mode
switchPage.switchLight = () => {
    const toggleLight = $('#light-dark');

    toggleLight.on('click', function(){
        $('body').toggleClass('light');

    })
}

// modal variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay-read-me");
const openModalBtn = document.querySelector(".btn-read-me");
const closeModalBtn = document.querySelector(".btn-close");
const body = document.body;

// Function for opening the modal
const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
	body.classList.add("fixed");
};
// Event listener for opening the modal when the button is clicked
openModalBtn.addEventListener("click", openModal);

// Function for closing the modal
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
	body.classList.remove("fixed");
};

// Event listeners for clicking the close button, clicking the overlay, or pressing Esc key
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});