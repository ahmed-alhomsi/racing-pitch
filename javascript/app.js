const welcome = document.querySelector('.welcome-section');
const heading = document.querySelector('.heading');
const button = document.querySelector('.button');
const navtoggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const contents = document.querySelector('.contents-div');
const contentsHeading = document.querySelector('.contents-heading');
const links = document.querySelectorAll('link');

window.addEventListener('DOMContentLoaded', () => {
    heading.classList.add('heading-fade');
    heading.classList.add('section-up');
});

window.setTimeout(()=>{
    heading.classList.add('section-up');
    button.classList.add('button-up');
    button.classList.add('button-fade');
}, 600);

navtoggle.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-open');
});

button.addEventListener('click',()=>{
    welcome.classList.add('animation-up');
    welcome.classList.add('fade');
    setTimeout(() => {
        contents.classList.add('show');
        contents.classList.add('slide');
    }, 1100);
    setTimeout(() => {
        contentsHeading.classList.add('contents-heading-downright');
    }, 1500);
})

