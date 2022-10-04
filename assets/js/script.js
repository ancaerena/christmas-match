// function to record the number of clicks and to flip the cards
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
  }

  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}
// *functions to keep cards flipped when a match is found
// *code source for checkForMatch, disable cards and unflip cards: https://marina-ferreira.github.io/


function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));



// function to reset the board game
function resetGame() {

}

// function to shuffle the cards
 function suffleCards() {

 }

