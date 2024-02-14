// when we click the hamburger menu,
// the nav-menu goes to position static
// 

const burgerButton = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");
const navLinks = document.querySelector(".nav-link");

burgerButton.addEventListener("click", function(){
    menu.classList.toggle("nav-menu-present");
    console.log(menu);
});

