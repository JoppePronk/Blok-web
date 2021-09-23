// JavaScript Document


var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}

console.log(hallo);