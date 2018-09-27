// naive solution

// takes a lot of space
// can optimize by passing in references rather than actual arrays

// O(n) runtime

function maxSubarray(arr) {
  let bigStart = 0;
  let bigEnd = 1;

  let biggestSum = 0;

  let currStart = 0;
  let currEnd = 1;

  let currSum = 0;

  for(let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    currEnd++;

    if(currSum > biggestSum) {
      biggestSum = currSum;
      bigStart = currStart;
      bigEnd = currEnd;
    }

    if(currSum < 0) {
      currStart = i + 1;
      currEnd = i + 1;
      currSum = 0;
    }
  }
  return arr.slice(bigStart, bigEnd);
}

const arr = [1, -3, 2, 1, -1, 3, -100];
console.log(maxSubarray(arr));
