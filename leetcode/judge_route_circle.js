// time complexity: O(n)
// space complexity: O(n)

var judgeCircle = function(moves) {
  let moveCounter = countMoves(moves);
  return compareMoves(moveCounter);
};

function countMoves(moves) {
  let moveCount = {};

  for(let i = 0; i < moves.length; i++) {
    let currentMove = moves[i];
    if(moveCount[currentMove]) {
      moveCount[currentMove]++;
    } else {
      moveCount[currentMove] = 1;
    }
  }

  return moveCount;
}

function compareMoves(moveCounter) {
  return moveCounter['U'] === moveCounter['D'] && moveCounter['L'] === moveCounter['R'];
}

console.log(judgeCircle('LL'));
