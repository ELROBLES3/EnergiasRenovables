// Arreglo para llevar el índice actual de cada carrusel
let currentIndex = [0, 0, 0]; // Un índice para cada carrusel
const carousels = document.querySelectorAll('.carousel');

// Muestra la imagen correspondiente de un carrusel
function showSlide(carouselIndex, slideIndex) {
  const slides = carousels[carouselIndex].querySelectorAll('.carousel-item');
  
  if (slideIndex >= slides.length) {
    currentIndex[carouselIndex] = 0;
  } else if (slideIndex < 0) {
    currentIndex[carouselIndex] = slides.length - 1;
  } else {
    currentIndex[carouselIndex] = slideIndex;
  }

  const offset = -currentIndex[carouselIndex] * 100;
  carousels[carouselIndex].querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Función para avanzar a la siguiente imagen en un carrusel específico
function nextSlide(carouselIndex) {
  showSlide(carouselIndex, currentIndex[carouselIndex] + 1);
}

// Función para retroceder a la imagen anterior en un carrusel específico
function prevSlide(carouselIndex) {
  showSlide(carouselIndex, currentIndex[carouselIndex] - 1);
}
