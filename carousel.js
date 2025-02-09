const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
let currentIndex = 0;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove("current-slide");
    if (i === index) {
      slide.classList.add("current-slide");
    }
  });
};

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Exibe o primeiro slide inicialmente
showSlide(currentIndex);
