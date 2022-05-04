export function setPieces() {
  // rooks
  new Rook('black', '0-0', false);
  new Rook('black', '0-7', false);
  new Rook('white', '7-0', false);
  new Rook('white', '7-7', false);

  // knights
  new Knight('black', '0-1');
  new Knight('black', '0-6');
  new Knight('white', '7-1');
  new Knight('white', '7-6');

  // bishops
  new Bishop('black', '0-2');
  new Bishop('black', '0-5');
  new Bishop('white', '7-2');
  new Bishop('white', '7-5');

  // queens
  new Queen('black', '0-3');
  new Queen('white', '7-3');

  // kings
  new King('black', '0-4', false);
  new King('white', '7-4', false);

  // pawns
  for (let j = 0; j < 8; j++) {
    new Pawn('black', `1-${j}`, false);
    new Pawn('white', `6-${j}`, false);
  }
}

export const pieces = [];

export const squareObj = {};

class Piece {
  constructor(color, square) {
    this.color = color;
    this.square = square;
    squareObj[square].piece = this;
    pieces.push(this);
  }

}

class Pawn extends Piece {
  constructor(color, square, moved) {
    super(color, square);
    this.moved = moved;
  }

  getAvaiableMoves() {
    const direction = this.color === 'black' ? 1 : -1;

    let [row, col] = this.square.split('-');

    row = parseInt(row);
    col = parseInt(col);
    

    const out = [];

    const front = squareObj[`${row + direction}-${col}`];
    if (front && !front.piece) out.push(front);

    if(!this.moved) {
      const doubleFront = squareObj[`${row + direction * 2}-${col}`];
      if (doubleFront && !doubleFront.piece) out.push(doubleFront);
    }
    return [out, []];
  }
}

class Knight extends Piece {
  constructor(color, square) {
    super(color, square);
  }

  getAvaiableMoves() {
    const availableSquares = [];
    const attackSquares = [];
    let [row, col] = this.square.split('-');

    row = parseInt(row);
    col = parseInt(col);

    let coords = [
      [row + 2, col + 1],
      [row + 2, col - 1],
      [row + 1, col + 2],
      [row + 1, col - 2],
      [row - 2, col + 1],
      [row - 2, col - 1],
      [row - 1, col + 2],
      [row - 1, col - 2],
    ]

    for (let coord of coords) {
      const potentialSpace = squareObj[`${coord[0]}-${coord[1]}`];
      if(potentialSpace && !potentialSpace.piece) availableSquares.push(potentialSpace);
    }
    return [availableSquares, attackSquares];
  }
}

class Bishop extends Piece {
  constructor(color, square) {
    super(color, square);
  }

  getAvaiableMoves() {
    // foo
  }
}

class Rook extends Piece {
  constructor(color, square, moved) {
    super(color, square);
    // giving a moved boolean for castling
    this.moved = moved;
  }

  getAvaiableMoves() {
    
  }
}

class Queen extends Piece {
  constructor(color, square) {
    super(color, square);
  }

  getAvaiableMoves() {
    // foo
  }
}

class King extends Piece {
  constructor(color, square, moved) {
    super(color, square);
    // giving a moved boolean for castling
    this.moved = moved;
  }

  getAvaiableMoves() {
    // foo
  }
}