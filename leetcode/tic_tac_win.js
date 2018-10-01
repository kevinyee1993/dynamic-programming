function checkWin(board) {
  return checkHorizontal(board) || checkVertical(board) || checkDiagonal(board);
}

// O(n) time where n is number of board squares
// O(1) space
function checkHorizontal(board) {
  for(let row = 0; row < board.length; row++) {
    if(allSame(board[row])) {
      return true;
    }
  }

  return false;
}

// O(c) space
// O(n) time
function checkVertical(board) {
  for(let col = 0; col < board[0].length; col++) {

    // O(c) space where c is number of elements in a column
    let colArr = [];

    for(let row = 0; row < board.length; row++) {
      colArr.push(board[row][col]);
    }

    if(allSame(colArr)) {
      return true;
    }
  }

  return false;
}

// O(d) space where d is length of diagonal array
// O(n) time
function checkDiagonal(board) {
  let diag1 = [];
  let diag2 = [];

  for(let i = 0; i < board.length; i++) {
    let diag2Row = i;
    let diag2Col = board.length - 1 - i;
    diag1.push(board[i][i]);
    diag2.push(board[diag2Row][diag2Col]);
  }

  if(allSame(diag1) || allSame(diag2)) {
    return true;
  }

  return false;

}


// O(n) time where n is elements in array
// O(1) space
function allSame(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== arr[i + 1]) {
      return false;
    }
  }

  return true;
}

const board = [
  ['x', 'x', 'o'],
  ['o', 'o', 'x'],
  ['o', 'x', 'o']
];

console.log(checkWin(board));
