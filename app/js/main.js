

//declaration

const hamburderlogo = document.querySelector('.hamburger-logo'); 
const remover = document.querySelector('.remover');
const opacity = document.querySelector('.opacity') 
const hamburgernav = document.querySelector('.hamburger-nav') 
const bodyall = document.querySelector('.body-content');
const selections = document.querySelectorAll('.selections');

hamburderlogo.addEventListener('click',()=>{
   remover.style.display = "block";
   hamburderlogo.style.display = "none";
   opacity.style.display = "block";
   hamburgernav.classList.add('hamburger-nav-active');
});

remover.addEventListener('click',()=>{
    remover.style.display = "none";
    hamburderlogo.style.display = "block";
    opacity.style.display = "none";
    hamburgernav.classList.remove('hamburger-nav-active');
 });

 opacity.addEventListener('click',()=>{
   remover.style.display = "none";
   hamburderlogo.style.display = "block";
   remover.style.display = "none";
   opacity.style.display = "none";
   hamburgernav.classList.remove('hamburger-nav-active');
 });


selections.forEach(function(select){ //add listener in every selections
 
   select.addEventListener('click',()=>{
      select.style.border = "2px solid blue";
      opacity.style.display = "block";
      bodyall.style.zIndex = "10";
   });

});





