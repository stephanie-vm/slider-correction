const apiURL = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';

const info = (images) => {
  for (let i = 0; i < images.length; i++) {
    const sliderContainer = document.querySelector('slider__div-container');
    const div = document.createElement('div');
    const content = `
    <div class="slider__cards slider__images--animation">
      <img class="slider__images" src="${images[i].avatar}"
        alt="Se muestran 2 productos derivados de la miel, totalmente naturales y listos para disfrutar">
    </div>

    <div class="slider__cards slider__images--animation">
      <img class="slider__images" src="${images[i].avatar}"
        alt="Se muestran 2 productos naturales y enriquecedores para tu cuerpo, los llamados súper alimentos">
    </div>

    <div class="slider__cards  slider__images--animation">
      <img class="slider__images" src="${images[i].avatar}"
        alt="Que nunca te falte la energía con estos 2 productos derivados de la miel y totalmente naturales">
    </div>
    `;
    sliderContainer.innerHTML = content;
    console.log(sliderContainer.innerHTML = content);
  }
}


fetch(apiURL)
.then((response) => response.json())
.then((data) => {
  info(data);
});


let slideIndex = 1;
const backButton = document.getElementById('back');
const advanceButton = document.getElementById('advance');
const indicador1 = document.getElementById('slider__indicador-1');
const indicador2 = document.getElementById('slider__indicador-2');
const indicador3 = document.getElementById('slider__indicador-3');
appearSlides(slideIndex);
let numberSlide = -1;



// Next/previous controls
function moreSlides(numberSlide) {
    appearSlides(slideIndex += numberSlide);
}

// Thumbnail image controls
function currentSlide(numberSlide) {
    appearSlides(slideIndex = numberSlide);
}

function appearSlides(numberSlide) {
    let slides = document.querySelectorAll(".slider__cards");
    let indicatorSides = document.querySelectorAll(".slider__circles-indicators-items");
    if (numberSlide > slides.length) {slideIndex = 1}
    if (numberSlide < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < indicatorSides.length; i++) {
        indicatorSides[i].className = indicatorSides[i].className.replace("js-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    indicatorSides[slideIndex-1].className += " js-active";
}

backButton.addEventListener('click', () => {
    moreSlides(1);
    console.log('hi');
});

advanceButton.addEventListener('click', () => {
    moreSlides(-1);
    console.log('hi');
});

indicador1.addEventListener('click', () => {
    currentSlide(1);
    console.log('hi');
});

indicador2.addEventListener('click', () => {
    currentSlide(2);
    console.log('hi');
});

indicador3.addEventListener('click', () => {
    currentSlide(3);
    console.log('hi');
});
