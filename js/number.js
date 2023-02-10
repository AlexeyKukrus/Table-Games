'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';

    //Угадал
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    };

    //Число больше
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком много!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Ты проиграл!';
      document.querySelector('.score').textContent = 0;
    }

    //Число меньше
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Ты проиграл!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Перезагрузка
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});
