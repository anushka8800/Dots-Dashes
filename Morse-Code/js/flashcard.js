const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const showButton = card.querySelector('.show-answer');
  const hideButton = card.querySelector('.hide-answer');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');

  showButton.addEventListener('click', () => {
    front.style.transform = 'rotateY(-180deg)';
    back.style.transform = 'rotateY(0deg)';
  });

  hideButton.addEventListener('click', () => {
    front.style.transform = 'rotateY(0deg)';
    back.style.transform = 'rotateY(180deg)';
  });
});
