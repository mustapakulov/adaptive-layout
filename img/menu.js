let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let langSwitch = document.querySelector('.lang__switch');
menuBtn.addEventListener('click' , function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    langSwitch.classList.toggle('active');
});