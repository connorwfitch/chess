export function setPieces() {
  // rooks
  new Rook('black', '0-0');
  new Rook('black', '0-7');
  new Rook('white', '7-0');
  new Rook('white', '7-7');

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
  new King('black', '0-4');
  new King('white', '7-4');

  // pawns
}

export const pieces = [];

class Piece {
  constructor(color, square) {
    this.color = color;
    this.square = square;
    squareObj[square].piece = this;
    pieces.push(this);
  }

}

class Pawn extends Piece {
  constructor(color, square) {
    super(color, square);
  }
}

class Knight extends Piece {
  constructor(color, square) {
    super(color, square);
  }
}

class Bishop extends Piece {
  constructor(color, square) {
    super(color, square);
  }
}

class Rook extends Piece {
  constructor(color, square) {
    super(color, square);
    // giving a moved boolean for castling
    this.moved = moved;
  }
}

class Queen extends Piece {
  constructor(color, square) {
    super(color, square);
  }
}

class King extends Piece {
  constructor(color, square) {
    super(color, square);
    // giving a moved boolean for castling
    this.moved = moved;
  }
}