const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

startSlider();

function startSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

const burgerMenu = document.querySelector(".burger-menu");

const menuOffScreen = document.querySelector(".menu-offscreen");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  menuOffScreen.classList.toggle("active");
});
