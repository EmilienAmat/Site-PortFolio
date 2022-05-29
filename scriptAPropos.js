//Menu///

let logoHamburger = document.querySelector(".hamburger");
let checkBox = document.querySelector(".menu-cb");
let exitCross = document.querySelector(".exitCross")
let animNav = document.querySelectorAll(".aniMot")
let hideBody = document.querySelector(".responsiveMenu")

checkBox.addEventListener("change",() =>
{
   logoHamburger.classList.toggle("activeHam");
   exitCross.classList.toggle("activeCross");
   hideBody.classList.toggle("activeHideBody");
   animNav.forEach(function(event)
      {
         event.classList.toggle("activeMenu");
      });
});