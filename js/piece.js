export function setPieces() {

}

export let pieces = [];

class Piece {
  constructor(color, positionId) {
    this.color = color;
    this.positionId = positionId;
    pieces.push(this);
  }

}

class Pawn extends Piece {
  constructor(color, positionId) {
    super(color, positionId);
  }
}

class Knight extends Piece {
  constructor(color, positionId) {
    super(color, positionId);
  }
}

class Bishop extends Piece {
  constructor(color, positionId) {
    super(color, positionId);
  }
}

class Rook extends Piece {
  constructor(color, positionId) {
    super(color, positionId);
    // giving a moved boolean for castling
    this.moved = moved;
  }
}

class Queen extends Piece {
  constructor(color, positionId) {
    super(color, positionId);
  }
}

class King extends Piece {
  constructor(color, positionId) {
    super(color, positionId);
    // giving a moved boolean for castling
    this.moved = moved;
  }
}