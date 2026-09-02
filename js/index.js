const minNumber = 1;
const maxNumber = 10;

const slideElement = document.getElementById('slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentNumber = minNumber;

function renderSlide() {
  slideElement.textContent = String(currentNumber);
  prevButton.disabled = currentNumber === minNumber;
  nextButton.disabled = currentNumber === maxNumber;
}

prevButton.addEventListener('click', () => {
  if (currentNumber > minNumber) {
    currentNumber -= 1;
    renderSlide();
  }
});

nextButton.addEventListener('click', () => {
  if (currentNumber < maxNumber) {
    currentNumber += 1;
    renderSlide();
  }
});

renderSlide();
