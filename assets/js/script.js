// function to record the number of clicks and to flip the cards
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
   }

}
cards.forEach(card => card.addEventListener('click', flipCard));

// function to keep cards flipped when a match is found
function checkForMarch() {

}
// function to reset the board game
function resetGame() {

}

// function to shuffle the cards
 function suffleCards() {

 }

