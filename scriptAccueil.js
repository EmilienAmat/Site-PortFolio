//Menu///

let logoHamburger = document.querySelector(".hamburger");
let checkBox = document.querySelector(".menu-cb");
let exitCross = document.querySelector(".exitCross");
let animNav = document.querySelectorAll(".aniMot");
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

// fondu img 
 
let imgSlider = document.getElementsByClassName("imgSlider");
let step = 0;
let nbImg = imgSlider.length;
let before  = document.getElementById("arrowLeft");
let next = document.getElementById("arrowRight");

function takeOffImg()
{
   for(let i=0; i<nbImg; i++)
   {
      imgSlider[i].classList.remove("active");
   }
}

setInterval(() => 
{
   step++
   if(step >= nbImg)
   {
      step=0;
   }   
   takeOffImg();
   imgSlider[step].classList.add("active");
}, 7000);

next.addEventListener("click",() =>
{
   step++;
   if(step >= nbImg)
   {
      step=0;
   }   
   takeOffImg();
   imgSlider[step].classList.add("active");
});

before.addEventListener("click",() =>
{
   step--;
   if(step < 0)
   {
      step = nbImg - 1;
   }   
   takeOffImg();
   imgSlider[step].classList.add("active");
});
