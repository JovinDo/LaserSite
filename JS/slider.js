let current = 0;
const slides = document.querySelectorAll(".slide");
//const content = document.querySelectorAll(".content");

setInterval(nextSlide, 7000);

function nextSlide() {
  slides[current].classList.remove('showing');
  //content[current].classList.remove('showing');
  // cur = 1 % 3 = 1, then cur = 2 % 3 = 2, then cur = 3 % 3 = 0, and it repeats each click
  current = (current + 1) % slides.length;
  slides[current].classList.add('showing');
  //content[current].classList.add('showing');
}