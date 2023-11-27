//menu mobile
const hamburguer = document.querySelector(".hamburger");
const navMob = document.querySelector(".nav-mob");
const navLinks = document.querySelectorAll(".nav-item");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle('active');
  navMob.classList.toggle('active');
});
[...navLinks].forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle('active');
    hamburguer.classList.toggle('active');
    navMob.classList.toggle('active');
  })
});
//fim menu mobile
//scroll
const menuItems = document.querySelectorAll('.menu-desktop a[href^="#"]');
const vacAction = document.querySelector('.vaccall');

vacc = vacAction.addEventListener('click', scrollToIdOnClick);

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const idd = element.getAttribute('href');
  const to = document.querySelector(idd).offsetTop;
  
  window.scroll({
    top: to - 55
  });
}
//scroll mobile
const menuMobs = document.querySelectorAll('.menu-mobile a[href^="#"]');

menuMobs.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const idd = element.getAttribute('href');
  const to = document.querySelector(idd).offsetTop;
  
  window.scroll({
    top: to - 55
  });
}
//fim scroll
//slider
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let  slideAtual = 1;

//navegacao manual
const manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');
    
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    slideAtual = i;
  });
});

//navegacao automatica
const repeat = function(activeClass){
let active = document.getElementsByClassName('active');
let i = 1

const repeater = () => {
  setTimeout(function(){
      [...active].forEach((slideAtual) => {
        slideAtual.classList.remove('active');
      })
  
  slides[i].classList.add('active');
  btns[i].classList.add('active');
  i++;

  if(slides.length == i){
    i = 0;
  }
  if(i >= slides.length){
    return;
  }
  repeater();
}, 5000);
}
repeater();
}
repeat();
//fim slider
//slide 2
const slides2 = document.querySelectorAll(".slider2");
const prevButton2 = document.querySelector(".prev2");
const nextButton2 = document.querySelector(".next2");
let currentIndex2 = 0;

function showSlide(index) {
  slides2.forEach((slider, i) => {
    if (i === index) {
      slider.style.display = "block";
    } else {
      slider.style.display = "none";
    }
  });
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  showSlide(currentIndex2);
}

function prevSlide2() {
  currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
  showSlide(currentIndex2);
}

nextButton2.addEventListener("click", nextSlide2);
prevButton2.addEventListener("click", prevSlide2);
//fim slider 2