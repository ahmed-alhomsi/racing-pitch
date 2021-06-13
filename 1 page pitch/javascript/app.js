const navtoggle = document.querySelector('.nav-toggle');
const afternoonheading = document.querySelector('.goodafternoon-heading');
const begin = document.querySelector('.begin');

window.setTimeout(()=>{
    begin.classList.add('fadein');
    afternoonheading.classList.add('up');
}, 800);

begin.addEventListener('click',()=>{
    scrollTo(0, 570);
});

navtoggle.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-open');
});