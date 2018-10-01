// solve using kadane's algorithm

// O(n) time
// O(n) space
function maxSumSubarray(arr) {
  let maxSum = 0;
  let maxSubarray = [];

  let prevSum = 0;
  let prevSubarray = [];

  for(let i = 0; i < arr.length; i++) {
    let currSum = prevSum + arr[i];
    let currArr = [];

    if(arr[i] > currSum) {
      currArr = [arr[i]];
      currSum = arr[i];
    } else {
      currArr = Array.from(prevSubarray);
      currArr.push(arr[i]);
    }

    if(currSum > maxSum) {
      maxSubarray = Array.from(currArr);
      maxSum = currSum;
    }

    prevSum = currSum;
    prevSubarray = Array.from(currArr);
  }

  return maxSubarray;
}
const test = [1, -3, 2, 1, -1];
console.log(maxSumSubarray(test));
