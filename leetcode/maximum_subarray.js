// naive solution

// takes a lot of space
// can optimize by passing in references rather than actual arrays

// O(n) runtime

function maxSubarray(arr) {
  let biggestArr = [];
  let biggestSum = 0;

  let currArr = [];
  let currSum = 0;

  for(let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    currArr.push(arr[i]);

    if(currSum > biggestSum) {
      biggestSum = currSum;
      biggestArr = Array.from(currArr);
    }

    if(currSum < 0) {
      currArr = [];
      currSum = 0;
    }
  }

  return biggestArr;
}

const arr = [1, -3, 2, 1, -1];
console.log(maxSubarray(arr));
