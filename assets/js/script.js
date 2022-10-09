

const cards = document.querySelectorAll('.memory-card');
const moves = document.getElementById("moves");
const startButton = document.getElementById("start");
const results = document.getElementById("result");
const controls = document.querySelector(".controls");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// set initial moves and win count
let movesCount = 0, winCount = 0;

// for timer
//Timer
const timerContainer = document.querySelector(".timer");
let liveTimer,
    totalSeconds = 0;

timerContainer.innerHTML = totalSeconds + ' s';

 function startTimer() {
    liveTimer = setInterval(function() {
        totalSeconds++;
        timerContainer.innerHTML = totalSeconds + 's';
    }, 1000);
}

startTimer()

function stopTimer() {
    clearInterval(liveTimer);
}

//calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span><strong>Moves:</strong></span>${movesCount}`;
}



// function to record the number of clicks and to flip the cards
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
    this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
  }

  secondCard = this;

  movesCounter();

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

  resetGame();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetGame();
  }, 1500);

}

// function to reset the board game
function resetGame() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));


// function to shuffle the cards
(function shuffleCards() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
  });
})();
