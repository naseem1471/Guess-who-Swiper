var swiper = new Swiper('.Slider-container', {
  effect: 'cards',
  grabCursor: true,
  centerdSlides: true,
  loop: true,
});
// swiper.changeDirection('vertical');

// Get the buttons
const reject = document.getElementById("reject");
const accept = document.getElementById("accept");
// Add event listeners to the buttons
reject.addEventListener("click", function () {
  // Get the image element of the current slide
  var img = document.querySelector(".swiper-slide:nth-child(" + (swiper.activeIndex + 1) + ") img");
  // Set the opacity of the image to 0.3
  img.style.opacity = 0.05;
  // Move to the next slide
  swiper.slideNext();
});
accept.addEventListener("click", function () {
  // Get the image element of the current slide
  var img = document.querySelector(".swiper-slide:nth-child(" + (swiper.activeIndex + 1) + ") img");
  // Set the opacity of the image to 1
  img.style.opacity = 1;
  // Move to the next slide
  swiper.slideNext();
});

