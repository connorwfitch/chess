document.addEventListener("DOMContentLoaded", () => {
  // creating my game squares
  createSquares();
  setPieces();
});

// creates my games squares, with id's that are 0 indexed
function createSquares() {
  const gameBoard = document.getElementById('board');
  for (let i = 0; i < 64; i++) {
    // basic creation actions
    let square = document.createElement('div');
    square.classList.add('game-square');
    square.id = i;
    // white vs black class
    determineColor(square, i);
    // adding event listener
    square.addEventListener('click', squareClicked);
    // appending
    gameBoard.append(square);
  }
}

function squareClicked(e) {
  // actions upon a square being clicked
  let old = document.querySelectorAll('.yhighlighted');
  old.forEach(ele => ele.classList.toggle('yhighlighted'));

  let currentSquare = e.target;
  currentSquare.classList.toggle('yhighlighted');
}

function determineColor(square, i) {
  let whiteSet = new Set([0,2,4,6,9,11,13,15,16,18,20,22,25,27,29,31,32,34,36,38,41,43,45,47,48,50,52,54,57,59,61,63]);
  if (whiteSet.has(i)) square.classList.add('white');
  else square.classList.add('black');
}