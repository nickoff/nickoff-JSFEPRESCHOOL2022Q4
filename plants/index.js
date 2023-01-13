let gamburgerBtn = document.querySelector('.gamburger-btn');
let navMenu = document.querySelector('.nav-header');
let body = document.querySelector('.about');

gamburgerBtn.addEventListener('click', function() {
    gamburgerBtn.classList.toggle('activ');
    navMenu.classList.toggle('activ')
});

navMenu.addEventListener('click', function() {
    gamburgerBtn.classList.remove('activ');
    navMenu.classList.remove('activ');
});

body.addEventListener('click', function() {
    gamburgerBtn.classList.remove('activ');
    navMenu.classList.remove('activ');
});

window.addEventListener('scroll', function() {
    gamburgerBtn.classList.remove('activ');
    navMenu.classList.remove('activ');
  });