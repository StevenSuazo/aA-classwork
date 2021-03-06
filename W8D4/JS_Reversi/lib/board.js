let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
    let array = new Array(8);
    for (let i =0; i< array.length; i++) {
      array[i] = new Array(8);
    }
    array[3][4] = new Piece('black');
    array[4][3] = new Piece('black');
    array[3][3] = new Piece('white');
    array[4][4] = new Piece('white');
    return array;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0]<0 || pos[0]> 7) {
    return false;
  }
  if (pos[1] < 0 || pos[1] > 7) {
    return false;
  }
  return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos) ) {
    return this.grid[pos[0]][pos[1]];
  } else {
    throw new Error("Not valid pos!");
  }
  
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.getPiece(pos) === undefined) {
    return false;
  }
  return this.getPiece(pos).color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return this.getPiece(pos) ? true : false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  // if there is no pieces to flip array
  if (!piecesToFlip) {
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  }
  if (!this.isValidPos(pos)){
    return piecesToFlip;
  }
  
  let piece = this.getPiece(pos);
  dir_x = dir[0];
  dir_y = dir[1];
  new_x = pos[0] + dir_x;
  new_y = pos[1] + dir_y; 
  new_pos = [ new_x, new_y];
  if (!this.isValidPos(new_pos) || !this.isOccupied(new_pos)) {
    return [];
  }
  new_piece = this.getPiece(new_pos)
  if (new_piece.color === color) {
    return piecesToFlip;
  }  else {
    return this._positionsToFlip(new_pos, color, dir , piecesToFlip );
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false; 
  }
  let moves_array = [];
  for (let i=0; i<Board.DIRS.length; i++) {
    let direction = Board.DIRS[i];
    moves_array = moves_array.concat(this._positionsToFlip(pos, color, direction));
    // if (moves.length > 0){
    //   moves_array.push(moves);
    // }
    // total_moves += moves.length
  }
  // console.log(moves_array)
  return moves_array.length != 0;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};



module.exports = Board;
