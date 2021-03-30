const apiUrl = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const containerImages = document.querySelector('.slider');

function addImages(images) {
  for (let i = 0; i < images.length; i++) {
    const content = `
    <div class="slider__cards slider__images--animation">
      <img class="slider__images" src="${images[2].avatar}"
        alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
        <img class="slider__images" src="${images[3].avatar}"
        alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
        <img class="slider__images" src="${images[4].avatar}"
        alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
    </div>
    <a id="back"class="slider__btn-back">&#10094;</a>
    <a id="advance" class="slider__btn-advance">&#10095;</a>
    `;
    containerImages.innerHTML = content;
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
