const navtoggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const afternoonheading = document.querySelector('.goodafternoon-heading');
const begin = document.querySelector('.begin');
const lastAnimation = document.querySelector('.scale-and-fade');
const lastSection = document.querySelector('.last-animation-section');

navtoggle.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-open');
});

window.setTimeout(()=>{
    begin.classList.add('fadein');
    afternoonheading.classList.add('up');
}, 800);

