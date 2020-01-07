const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll(".menu-nav__item");

menuBtn.addEventListener('click', toggle);

function toggle(){
    hamBurger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open'); 
    menuItem.forEach((i) => 
        i.classList.toggle('open')
    ); 
}

