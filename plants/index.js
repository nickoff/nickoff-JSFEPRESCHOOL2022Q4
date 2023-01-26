let gamburgerBtn = document.querySelector('.gamburger-btn');
let navMenu = document.querySelector('.nav-header');
let body = document.querySelector('.about');
let serviceBtn = document.querySelectorAll('.service-btn');
const gardenBtn = serviceBtn[0];
const lawnBtn = serviceBtn[1];
const plantingBtn = serviceBtn[2];
let serviceImgPlanting = document.querySelectorAll('.planting');
let serviceImgGarden = document.querySelectorAll('.garden');
let serviceImgLawn = document.querySelectorAll('.lawn');
function statusGardenBtn () {return gardenBtn.classList.contains('on-btn')};
function statusLawnBtn () {return lawnBtn.classList.contains('on-btn')};
function statusPlantingBtn () {return plantingBtn.classList.contains('on-btn')};
function gardenBtnOn () {gardenBtn.classList.add('on-btn')};
function gardenBtnOff () {gardenBtn.classList.remove('on-btn')};
function lawnBtnOn () {lawnBtn.classList.add('on-btn')};
function lawnBtnOff () {lawnBtn.classList.remove('on-btn')};
function plantingBtnOn () {plantingBtn.classList.add('on-btn')};
function plantingBtnOff () {plantingBtn.classList.remove('on-btn')};
function gardenBlurOn () {serviceImgGarden.forEach(img => img.classList.add('blur'))};
function gardenBlurOff () {serviceImgGarden.forEach(img => img.classList.remove('blur'))};
function lawnBlurOn () {serviceImgLawn.forEach(img => img.classList.add('blur'))};
function lawnBlurOff () {serviceImgLawn.forEach(img => img.classList.remove('blur'))};
function plantingBlurOn () {serviceImgPlanting.forEach(img => img.classList.add('blur'))};
function plantingBlurOff () {serviceImgPlanting.forEach(img => img.classList.remove('blur'))};
function statusGardenBlur () {return document.querySelectorAll('.garden')[0].classList.contains('blur')};
function statusLawnBlur () {return document.querySelectorAll('.lawn')[0].classList.contains('blur')};
function statusPlantingBlur () {return document.querySelectorAll('.planting')[0].classList.contains('blur')};

gardenBtn.addEventListener('click', (event) => {
    if (statusGardenBtn()) {
        {gardenBtnOff()};
        if (statusPlantingBtn() || statusLawnBtn()) {gardenBlurOn()};
        if (statusPlantingBtn() == false) {lawnBlurOff()};
        if (statusLawnBtn() == false) {plantingBlurOff()};
    }
    else {
        if (statusPlantingBtn() && statusLawnBtn()) {}
        else {
            gardenBtnOn();
            if (statusLawnBtn() == false) {lawnBlurOn()};
            if (statusPlantingBtn() == false) {plantingBlurOn()};
            if (statusGardenBlur()){gardenBlurOff()};
        }
    };
});

lawnBtn.addEventListener('click', (event) => {
    if (statusLawnBtn()) {
        {lawnBtnOff()};
        if (statusPlantingBtn() || statusGardenBtn()) {lawnBlurOn()};
        if (statusPlantingBtn() == false) {gardenBlurOff()};
        if (statusGardenBtn() == false) {plantingBlurOff()};
    }
    else {
        if (statusPlantingBtn() && statusGardenBtn()) {}
        else {
            lawnBtnOn();
            if (statusGardenBtn() == false) {gardenBlurOn()};
            if (statusPlantingBtn() == false) {plantingBlurOn()};
            if (statusLawnBlur()){lawnBlurOff()};
        }
    };
});

plantingBtn.addEventListener('click', (event) => {
    if (statusPlantingBtn()) {
        {plantingBtnOff()};
        if (statusLawnBtn() || statusGardenBtn()) {plantingBlurOn()};
        if (statusLawnBtn() == false) {gardenBlurOff()};
        if (statusGardenBtn() == false) {lawnBlurOff()};
    }
    else {
        if (statusLawnBtn() && statusGardenBtn()) {}
        else {
            plantingBtnOn();
            if (statusGardenBtn() == false) {gardenBlurOn()};
            if (statusLawnBtn() == false) {lawnBlurOn()};
            if (statusPlantingBlur()){plantingBlurOff()};
        }
    };
});


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

  