let gamburgerBtn = document.querySelector('.gamburger-btn');
let navMenu = document.querySelector('.nav-header');
let body = document.querySelector('.about');
let serviceBtn = document.querySelectorAll('.service-btn');

const priceBtn = document.querySelectorAll('.price-item');
const priceBasic = priceBtn[0];
const priceStandard = priceBtn[1];
const pricePro = priceBtn[2]
const basicsAccordion = document.querySelector('.basic');
const standardAccordion = document.querySelector('.standard');
const proAccordion = document.querySelector('.pro-care');

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

function priceBasicOpen () {
    priceBasic.classList.remove('price-item-close');
    priceBasic.classList.add('price-item-open');
    document.querySelectorAll('.action-btn')[0].classList.remove('action-btn-close');
    document.querySelectorAll('.action-btn')[0].classList.add('action-btn-opened');
    document.getElementById('basics').innerHTML = '<hr><p>Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p><p><span class="price-dollar">$</span><span class="price-orange-text">15</span><span class="price-per-hour"> / per hour</span></p><button onclick="window.location.href=\'#contacts\'\;" class="price-item-btn">Order</button>';
    document.getElementById('basics').classList.add('price-open');
} 

function priceBasicClose () {
    priceBasic.classList.add('price-item-close');
    priceBasic.classList.remove('price-item-open');
    document.querySelectorAll('.action-btn')[0].classList.remove('action-btn-opened');
    document.querySelectorAll('.action-btn')[0].classList.add('action-btn-close');
    document.getElementById('basics').classList.remove('price-open');
    //document.getElementById('basics').innerHTML = '';
}

function priceStandardOpen () {
    priceStandard.classList.remove('price-item-close');
    priceStandard.classList.add('price-item-open');
    document.querySelectorAll('.action-btn')[1].classList.remove('action-btn-close');
    document.querySelectorAll('.action-btn')[1].classList.add('action-btn-opened');
    document.getElementById('standard').classList.add('price-open');    
    document.getElementById('standard').innerHTML = '<hr><p>Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p><p><span class="price-dollar">$</span><span class="price-orange-text">25</span><span class="price-per-hour"> / per hour</span></p><button onclick="window.location.href=\'#contacts\'\;" class="price-item-btn">Order</button>';}; 

function priceStandardClose () {
    priceStandard.classList.add('price-item-close');
    priceStandard.classList.remove('price-item-open');
    document.querySelectorAll('.action-btn')[1].classList.remove('action-btn-opened');
    document.querySelectorAll('.action-btn')[1].classList.add('action-btn-close');
    document.getElementById('standard').classList.remove('price-open');
    //document.getElementById('standard').innerHTML = '';   
}


function priceProOpen () {
    pricePro.classList.remove('price-item-close');
    pricePro.classList.add('price-item-open');
    document.querySelectorAll('.action-btn')[2].classList.remove('action-btn-close');
    document.querySelectorAll('.action-btn')[2].classList.add('action-btn-opened');
    document.getElementById('pro-care').classList.add('price-open');
    document.getElementById('pro-care').innerHTML = '<hr><p>Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p><p><span class="price-dollar">$</span><span class="price-orange-text">35</span><span class="price-per-hour"> / per hour</span></p><button onclick="window.location.href=\'#contacts\'\;" class="price-item-btn">Order</button>';}; 

function priceProClose () {
    pricePro.classList.add('price-item-close');
    pricePro.classList.remove('price-item-open');
    document.querySelectorAll('.action-btn')[2].classList.remove('action-btn-opened');
    document.querySelectorAll('.action-btn')[2].classList.add('action-btn-close');
    document.getElementById('pro-care').classList.remove('price-open');
    //document.getElementById('pro-care').innerHTML = '';   
}


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

basicsAccordion.addEventListener('click', (event) => {
    if (document.querySelectorAll('.price-item')[0].classList.contains('price-item-close')) {
        priceBasicOpen ();
        priceStandardClose();
        priceProClose();
    }
    else {priceBasicClose();}
})

standardAccordion.addEventListener('click', (event) => {
    if (document.querySelectorAll('.price-item')[1].classList.contains('price-item-close')) { 
        priceStandardOpen();
        priceBasicClose();
        priceProClose();
    }
    else {priceStandardClose();}
})

proAccordion.addEventListener('click', (event) => {
    if (document.querySelectorAll('.price-item')[2].classList.contains('price-item-close')) { 
        priceProOpen();
        priceBasicClose();
        priceStandardClose();
    }
    else {priceProClose();}
})



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

  