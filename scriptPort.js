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

// afficher Tuto écolo

let tutoEcolo  = document.querySelector(".tutoEcolo");
let affiche1   = document.getElementById("affiche1");
let body = document.querySelector(".bodyNonHide");
let cross = document.getElementById("crossExit");

affiche1.addEventListener("click", () =>
{
   tutoEcolo.classList.add("active");
   body.classList.add("bodyHide");
})

cross.addEventListener("click", () =>
{
   tutoEcolo.classList.remove("active");
   body.classList.remove("bodyHide");
})

// afficher forms

let forms  = document.querySelector(".forms");
let affiche2   = document.getElementById("affiche2");
let cross2 = document.getElementById("crossExit2");

affiche2.addEventListener("click", () =>
{
   forms.classList.add("active");
   body.classList.add("bodyHide");
})

cross2.addEventListener("click", () =>
{
   forms.classList.remove("active");
   body.classList.remove("bodyHide");
})

// afficher mode nuit

let night  = document.querySelector(".night");
let affiche3   = document.getElementById("affiche3");
let cross3 = document.getElementById("crossExit3");

affiche3.addEventListener("click", () =>
{
   night.classList.add("active");
   body.classList.add("bodyHide");
})

cross3.addEventListener("click", () =>
{
   night.classList.remove("active");
   body.classList.remove("bodyHide");
})

// afficher mode nuit

let autre  = document.querySelector(".autre");
let affiche4   = document.getElementById("affiche4");
let cross4 = document.getElementById("crossExit4");

affiche4.addEventListener("click", () =>
{
   autre.classList.add("active");
   body.classList.add("bodyHide");
})

cross4.addEventListener("click", () =>
{
   autre.classList.remove("active");
   body.classList.remove("bodyHide");
})