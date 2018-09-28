// O(n) time
// O(1) space
function stoneGame(piles) {
  let alex = 0;
  let lee = 0;
  let turn = 1;

  while(piles.length > 0) {
    let first = piles[0];
    let last = piles[piles.length - 1];

    let bigStone = findBigStone(first, last);

    if(first == bigStone) {
      piles.shift();
    } else {
      piles.pop();
    }

    if(turn % 2 === 1) {
      alex += bigStone;
    } else {
      lee += bigStone;
    }
  }

  return alex > lee;
}


function findBigStone(first, last) {
  let bigStone;

  if(first > last) {
    bigStone = first;
  } else {
    bigStone = last;
  }

  return bigStone;
}
