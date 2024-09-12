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
// Obtener los elementos inicio del modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modalResult = document.getElementById('modalResult');

// Abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Cerrar el modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
    modalResult.innerHTML = ''; // Limpiar el resultado cuando se cierra el modal
}

// Opción de Sí: redirige a otra página
yesBtn.onclick = function() {
    window.location.href = 'registro.html'; // Reemplaza con la URL a la que quieras redirigir
}

// Opción de No: cierra el modal
noBtn.onclick = function() {
    modal.style.display = 'none'; // Cierra el modal sin redirigir
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modalResult.innerHTML = ''; // Limpiar el resultado cuando se cierra el modal
    }
}

