function robotGrid(grid) {
  // at current position
  let currRow = 0;
  let currCol = 0;

  let targetRow = grid.length - 1;
  let targetCol = grid[0].length - 1;

  // if current position is out of bounds or restricted, return false
  // if current position is the target(bottom right index) return true
  let downCheck = helper(currRow + 1, currCol, targetRow, targetCol, grid);
  let rightCheck = helper(currRow, currCol + 1, targetRow, targetCol, grid);


  // if can move right, recursive call to move right
  // if can move down, recursive call to move down

  // return recursiveCall1 || recursiveCall2
  return downCheck || rightCheck;
}

function helper(currRow, currCol, targetRow, targetCol, grid) {
  if(currRow === targetRow && currCol === targetCol) {
    return true;
  }

  let currPos = grid[currRow][currCol];

  if(!currPos || currPos === null) {
    return false;
  }

  let downCheck = helper(currRow + 1, currCol, targetRow, targetCol, grid);
  let rightCheck = helper(currRow, currCol + 1, targetRow, targetCol, grid);

  return downCheck || rightCheck;
}
