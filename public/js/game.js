import { setPieces, pieces, squareObj } from './piece.js';

document.addEventListener("DOMContentLoaded", () => {
  // creating my game squares
  createSquares();
  setPieces();
});

// creates my games squares, with id's that are 0 indexed
function createSquares() {
  const gameBoard = document.getElementById('board');
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // basic creation actions
      let square = document.createElement('div');
      square.classList.add('game-square');
      square.id = `${i}-${j}`;
      squareObj[`${i}-${j}`] = square;
      // white vs black class
      determineColor(square, i, j);
      // adding event listener
      square.addEventListener('click', squareClicked);
      // appending
      gameBoard.append(square);
    }
  }
}

function squareClicked(e) {
  // get rid of previous target square
  let old = document.querySelectorAll('.rhighlighted');
  old.forEach(ele => ele.classList.toggle('rhighlighted'));

  // get rid of previous available squares
  old = document.querySelectorAll('.bhighlighted');
  old.forEach(ele => ele.classList.toggle('bhighlighted'));

  let currentSquare = e.target;
  if (currentSquare.piece) {
    currentSquare.classList.toggle('rhighlighted');
    const availableSquares = currentSquare.piece.getAvaiableMoves();
    availableSquares.forEach(ele => ele.classList.add('bhighlighted'));
  }
}

function determineColor(square, i, j) {
  if ((i + j) % 2 === 0) square.classList.add('white');
  else square.classList.add('black');
}