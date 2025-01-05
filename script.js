// JavaScript Code
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

// Function to update carousel position
const updateCarousel = () => {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
};

// Function to move to the next slide
const nextSlide = () => {
  const items = document.querySelectorAll('.carousel-item');
  index = (index < items.length - 1) ? index + 1 : 0;
  updateCarousel();
};

// Function to move to the previous slide
const prevSlide = () => {
  const items = document.querySelectorAll('.carousel-item');
  index = (index > 0) ? index - 1 : items.length - 1;
  updateCarousel();
};

// Event listeners for manual navigation
prevBtn.addEventListener('click', () => {
  clearInterval(autoScroll); // Pause auto-scroll on manual interaction
  prevSlide();
  startAutoScroll(); // Restart auto-scroll
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoScroll); // Pause auto-scroll on manual interaction
  nextSlide();
  startAutoScroll(); // Restart auto-scroll
});

// Auto-scroll setup
let autoScroll;
const startAutoScroll = () => {
  autoScroll = setInterval(nextSlide, 10000); // Change slides every 3 seconds
};

// Start auto-scroll on page load
startAutoScroll();

// Optional: Pause auto-scroll on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
carousel.addEventListener('mouseleave', () => startAutoScroll());
