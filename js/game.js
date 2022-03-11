document.addEventListener("DOMContentLoaded", () => {
  // creating my game squares
  createSquares();

  // creates my games squares, with id's that are 0 indexed
  function createSquares() {
    const gameBoard = document.getElementById('board');
    for (let i = 0; i < 64; i++) {
      let square = document.createElement('div');
      if(i % 2 === 0) square.classList.add('white');
      else square.classList.add('black');
      square.classList.add('square');
      square.setAttribute('id', i);
      gameBoard.appendChild(square);
    }
  }

  


});