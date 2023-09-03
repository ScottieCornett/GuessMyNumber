'use strict';

let magicNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    message(`You didn't pick a number 😮`);

    // When player wins
  } else if (guess === magicNumber) {
    selectTextQuery('.number', magicNumber);
    message('Correct Number!');
    changeBackground('body', '#60b347');
    changeWidth('.number', '30rem');
    if (highscore < score) {
      highscore = score;
      selectTextQuery('.highscore', highscore);
    }
  }
  // When a player's number is too high
  else if (guess > magicNumber) {
    if (score > 1) {
      badGuess('high');
    } else {
      gameOver();
    }
  }
  // When a player's number is too low
  else {
    if (score > 1) {
      badGuess('low');
    } else {
      gameOver();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  magicNumber = Math.trunc(Math.random() * 20) + 1;
  message('Start guessing...');
  selectTextQuery('.score', score);
  changeBackground('body', '#222');
  changeValue('.guess', '');
  selectTextQuery('.number', '?');
  changeWidth('.number', '15rem');
});

const message = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeValue = function (element, value) {
  document.querySelector(element).value = value;
};
const changeWidth = function (element, width) {
  document.querySelector(element).style.width = width;
};
const selectTextQuery = function (element, value) {
  document.querySelector(element).textContent = value;
};
const changeBackground = function (element, backgroundColor) {
  document.querySelector(element).style.backgroundColor = backgroundColor;
};
const badGuess = function (state) {
  message(`Your guess is too ${state}!!!`);
  score--;
  selectTextQuery('.score', score);
};
const gameOver = function () {
  message('Game Over!!!!');
  selectTextQuery('.score', 0);
};
const getRandomNumber = function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
};
