const cardRating = document.querySelector('.card-rating');
const cardThanks = document.querySelector('.card-thanks');

const submitBtn = document.querySelector('.card-rating .btn');
const ratingCircles = document.querySelectorAll('.rating-circles .circle');
const rating = document.querySelector('#rating');

submitBtn.addEventListener('click', () => {
  const oneRatingActive = Array.from(ratingCircles).some((circle) =>
    Array.from(circle.classList).includes('active')
  );
  if (oneRatingActive) {
    cardRating.classList.add('hidden');
    cardThanks.classList.remove('hidden');
  }
});

ratingCircles.forEach((circle, idx) => {
  circle.addEventListener('click', () => {
    removeClass(ratingCircles, 'active');
    circle.classList.add('active');
    rating.innerHTML = idx + 1;
  });
});

function removeClass(elements, className) {
  elements.forEach((element) => {
    element.classList.remove(className);
  });
}
