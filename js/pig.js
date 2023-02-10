'use strict';

//Переменные
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let totalScores, currentScore, activePlayer, play;

let initGame = function () {
  dice.classList.add('hidden');

  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  play = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--active');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};

//Старт игры
initGame();

//нажимаем кнопку "Бросить кубик"
btnRoll.addEventListener('click', function () {
  if (play) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `img/dice${diceNumber}.png`;

    //переключение игрока, если кубик = 1
    if (diceNumber !== 1) {
      currentScore = currentScore + diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

//нажимаем кнопку "Оставить"
btnHold.addEventListener('click', function () {
  if (play) {
    totalScores[activePlayer] = totalScores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      play = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    };
  };
});

//нажимаем кнопку "Новая игра"
btnNew.addEventListener('click', initGame);