console.log("hello there");

const menuButton = document.querySelector(".menu");
const navBar = document.querySelector(".nav");

menuButton.addEventListener('click', () => {
    navBar.classList.toggle("show-nav");
    console.log("I clicked");
})