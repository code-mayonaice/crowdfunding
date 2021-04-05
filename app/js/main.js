

//declaration

const hamburderlogo = document.querySelector('.hamburger-logo'); 
const remover = document.querySelector('.remover');
const opacity = document.querySelector('.opacity') 
const hamburgernav = document.querySelector('.hamburger-nav') 
const modalpupup = document.querySelector('.popup-modal');
const btn = document.querySelectorAll('.reward');



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



 //modal popup





