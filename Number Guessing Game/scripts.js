const btn = document.getElementById('btn');
const input = document.getElementById('input');
const pre = document.getElementById('pre');
const rem = document.getElementById('rem');
const show = document.getElementById('show');
const startOver = document.querySelector('.main'); // Corrected to select a single element
const p = document.createElement('p');

p.style.backgroundColor="blue";

let boolean = false;
let count = 10;
let arr = [];
let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate once

btn.addEventListener('click', function () {
    let num = parseInt(input.value);

    if (num > 10 || num < 0 || isNaN(num)) {
        show.innerHTML = `Please enter a number between 1 to 10`;
        return;
    }

    if (num === randomNumber) {
        show.innerHTML = `Wow! Your guess matched ${num}, Congratulations!!`;
        endGame();
        return; // Stop further processing after a correct guess
    } else if (num > randomNumber) {
        show.innerHTML = "Your guess is too high!";
    } else if (num < randomNumber) {
        show.innerHTML = "Your guess is too low!";
    }

    if (num >= 0 && num <= 10) {
        arr.push(num);
        pre.innerHTML = `Previous Guesses: ${arr.join(', ')}`;
        input.value = '';
    }

    if (boolean === false && num >= 0 && num <= 10) {
        count--;
        rem.textContent = `Remaining Guesses: ${count}`;
    }

    if (count === 0) {
        show.innerHTML = `Game over! The correct number was ${randomNumber}`;
        endGame();
    }
});

function endGame() {
    input.value = '';
    input.setAttribute('disabled', 'true');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start new Game</button>`;
    startOver.appendChild(p);
    boolean = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a new random number
        arr = [];
        count = 10;
        rem.textContent = `Remaining Guesses: ${count}`;
        pre.innerHTML = `Previous Guesses: `;
        show.innerHTML = '';
        input.removeAttribute('disabled');
        input.value = '';
        startOver.removeChild(p);
        console.log("New random number:", randomNumber); // For debugging
    });
}















/*

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

*/ 

