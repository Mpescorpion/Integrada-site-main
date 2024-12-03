// Seleção de elementos
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para mostrar o slide
function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Event listeners para os botões
prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Animação do título
document.querySelector('header h1').addEventListener('mouseover', function () {
  this.style.color = '#ff6f61';
});

document.querySelector('header h1').addEventListener('mouseout', function () {
  this.style.color = '#00f7ff';
});

