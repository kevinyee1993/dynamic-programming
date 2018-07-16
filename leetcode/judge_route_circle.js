var judgeCircle = function(moves) {

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

console.log(countMoves(['up','down','left','right','left']));
