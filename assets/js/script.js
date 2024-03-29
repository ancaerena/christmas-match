const gridContainer = document.querySelector(".grid-container");
const timeValue = document.getElementById("timer");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let interval;

document.querySelector(".score").textContent = score;

// Parts of code and functions taken from https://github.com/code-sketch/memory-game

//Initial Time
let seconds = 0,
  minutes = 0;

let isPlaying = false;
let isAllMatched = false;

//For timer
const timeGenerator = () => {
  if(!isAllMatched)
  {
    seconds += 1;
  }
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};



// pull the cards from json file using the Fetch API method code from https://github.com/code-sketch/memory-game
fetch("./public/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

// shuffle the cards code from https://github.com/code-sketch/memory-game

function shuffleCards() {
   let currentIndex = cards.length,
     randomIndex,
     temporaryValue;
   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     temporaryValue = cards[currentIndex];
     cards[currentIndex] = cards[randomIndex];
     cards[randomIndex] = temporaryValue;
   }
  }

  // generate the cards 

  function generateCards() {
      for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
          <div class="front">
            <img class="front-image" src=${card.image} />
          </div>
          <div class="back"></div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
      }
    }

 // add the flipCard function 

function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
    
      this.classList.add("flipped");
    
      if (!firstCard) {
        firstCard = this;
        return;
      }
    
      secondCard = this;
      score++;
      document.querySelector(".score").textContent = score;
      lockBoard = true;
      //Start timer
      if(!isPlaying)
      {
        isPlaying = true;
        this.interval = setInterval(timeGenerator, 1000);
        console.log("in if")
      }
      
      checkForMatch();
    }

// unflip the cards if a match is not found    
  
function checkForMatch() {
      let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    
      isMatch ? disableCards() : unflipCards();


// loop through all the cards to check for the flipped class

      let allFlipped = true;
      for(let i=0; i< gridContainer.childNodes.length-1;i++)
      {
        if(i == 0) {continue;}

        if(gridContainer.children[i].classList.value === "card")
        {
          allFlipped = false;
        }
      }
// when all cards have the flipped class, the game is won      
      if(allFlipped)
      {
        isAllMatched = true;
        alert("Congratulation! You Won! Press restart to play again!");
      }
      

}
    
function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    
      resetBoard();
    }
    
function unflipCards() {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
      }, 1000);
    }

// reset the board after each match attempt 

    function resetBoard() {
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }

// restart the game from the Restart button

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  seconds = 0,
  minutes = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}
