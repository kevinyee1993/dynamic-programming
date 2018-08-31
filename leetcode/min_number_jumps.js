// O(n^2) time
// O(1) space 

function minNumberOfJumps(array) {
  let numJumps = 0;
  let endOfArr = array.length - 1;
  let i = 0;

  while(i < endOfArr) {
    let currJumpVal = array[i];
    let biggestRange = 0;
    let bigBoyIndex = null;

    for(let j = i + 1; j <= i + currJumpVal; j++) {
      let nextJumpVal = array[j];

      if(j + nextJumpVal > biggestRange) {
        biggestRange = j + nextJumpVal;
        bigBoyIndex = j;
      }
    }
    numJumps++;
    // i += biggestRange;
    i = bigBoyIndex;
  }

  return numJumps;
}

let test = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
console.log(minNumberOfJumps(test));
