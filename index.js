const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

prev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.animationPlayState = 'paused';
  }
  slides[currentSlide].style.animationPlayState = 'running';
});

next.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.animationPlayState = 'paused';
  }
  slides[currentSlide].style.animationPlayState = 'running';
});

window.onload= function(){
document.querySelector('.preloader').style.display = "none";
};