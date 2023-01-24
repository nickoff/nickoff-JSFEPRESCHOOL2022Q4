let gamburgerBtn = document.querySelector('.gamburger-btn');
let navMenu = document.querySelector('.nav-header');
let body = document.querySelector('.about');
let serviceBtn = document.querySelectorAll('.service-btn');
let serviceImgPlanting = document.querySelectorAll('.planting');
let serviceImgGarden = document.querySelectorAll('.garden');
let serviceImgLawn = document.querySelectorAll('.lawn');
console.log(serviceBtn);

function focusPlanting() {
    serviceBtn[2].classList.toggle('on-btn');
    serviceImgGarden.forEach(img => img.classList.toggle('blur'));
    serviceImgLawn.forEach(img => img.classList.toggle('blur'));
}

function focusGarden() {
    serviceBtn[0].classList.toggle('on-btn');
    serviceImgPlanting.forEach(img => img.classList.toggle('blur'));
    serviceImgLawn.forEach(img => img.classList.toggle('blur'));
}

function focusLawn() {
    serviceBtn[1].classList.toggle('on-btn');
    serviceImgPlanting.forEach(img => img.classList.toggle('blur'));
    serviceImgGarden.forEach(img => img.classList.toggle('blur'));
}

serviceBtn[0].addEventListener('click', focusGarden);
serviceBtn[1].addEventListener('click', focusLawn);
serviceBtn[2].addEventListener('click', focusPlanting);


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