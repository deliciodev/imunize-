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
}, 4000);
}
repeater();
}
repeat();
//fim slider