// O(n) time
// O(1) space
// function stoneGame(piles) {
//   let alex = 0;
//   let lee = 0;
//   let turn = 1;
//
//   while(piles.length > 0) {
//     let first = piles[0];
//     let last = piles[piles.length - 1];
//
//     let bigStone = findBigStone(first, last);
//
//     if(first == bigStone) {
//       piles.shift();
//     } else {
//       piles.pop();
//     }
//
//     if(turn % 2 === 1) {
//       alex += bigStone;
//     } else {
//       lee += bigStone;
//     }
//   }
//
//   return alex > lee;
// }
//
//
// function findBigStone(first, last) {
//   let bigStone;
//
//   if(first > last) {
//     bigStone = first;
//   } else {
//     bigStone = last;
//   }
//
//   return bigStone;
// }


/**
 * @param {number[]} piles
 * @return {boolean}
 */

// [5,3,4,5]
// Alex max score: []
// Lee max score:  []


// keep track if alex's or lee's turn
// [5,3,4,5] alex's turn
// [3,4,5],5,0   [5,3,4],5,0  lee's turn
//[4,5],5,3 [3,4],5,5     [3,4],5,5 [5,3],5,4 alex's turn
// [4],9,3 [5],10,5
// ... keeping track of alex's and lee's score and curr state
// base case: if no more stones, return true if there's any scenario where
// alex's score is greater than lee's score
// if not return recursive call again
// O(2^n) time

var stoneGame = function(piles) {
    return helper(piles, 0, 0, true);
};

function helper(piles, alexScore, leeScore, isAlexTurn) {
    if(piles.length === 0) {
        return alexScore > leeScore;
    }

    let firstStone = piles[0];
    let lastStone = piles[piles.length - 1];
    let pileState1 = piles.slice(1,piles.length);
    let pileState2 = piles.slice(0, piles.length - 1);

    if(isAlexTurn) {
        return helper(pileState1, alexScore + firstStone, leeScore, false) || helper(pileState2, alexScore + lastStone, leeScore, false);
    } else {
                return helper(pileState1, alexScore, leeScore + firstStone, true) || helper(pileState2, alexScore, leeScore + lastStone, true);
    }
}

console.log(stoneGame([2,100,3,5]));
