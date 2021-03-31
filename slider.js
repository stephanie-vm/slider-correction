// Hacer el slider
// 2.1 Leer todos los divs del DOM
// 2.2 Ocultar 2 divs y aparecer solo 1
// 2.3 Escuchar el botón derecha izquierda
// 2.4 Escuchar los dots

const apiUrl = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const containerImages1 = document.getElementById('image-1');
const containerImages2 = document.getElementById('image-2');
const containerImages3 = document.getElementById('image-3');
const containerImages4 = document.getElementById('image-4');

function addImages(images) {
  for (let i = 0; i < images.length; i++) {
    const content1 = `
    <img class="slider__images" src="${images[2].avatar}"alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
    `;
    containerImages1.innerHTML = content1;
    const content2 = `
    <img class="slider__images" src="${images[3].avatar}"
     alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
    `;
    containerImages2.innerHTML = content2;
    const content3 = `
    <img class="slider__images" src="${images[4].avatar}"
    alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
    `;
    containerImages3.innerHTML = content3;
  }
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    addImages(data);
    // console.log(data);
  });

let slideIndex = 0;
const backButton = document.querySelector('.slider__btn-back');
const advanceButton = document.querySelector('.slider__btn-advance');
// This function will show the slides
function appearSlides(numberSlide) {
  const slides = document.querySelectorAll('.slider__cards');
  const indicatorSides = document.querySelectorAll('.slider__circles-indicators-items');
  if (numberSlide >= slides.length) {
    slideIndex = 0;
  }
  if (numberSlide < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    indicatorSides[i].classList.remove('js-active');
  }
  slides[slideIndex].style.display = 'block';
  indicatorSides[slideIndex].classList.add('js-active');
}
appearSlides(slideIndex);
// Event handler for these buttons, back and appear
backButton.addEventListener('click', () => {
  appearSlides(--slideIndex);
});
advanceButton.addEventListener('click', () => {
  appearSlides(++slideIndex);
});
document.querySelectorAll('.slider__circles-indicators-items').forEach((element) => {
  element.addEventListener('click', function indicatorsBullets() {
    const bullets = Array.prototype.slice.call(this.parentElement.children);
    const bulletsIndex = bullets.indexOf(element);
    appearSlides(slideIndex = bulletsIndex);
  });
});
