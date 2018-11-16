function subSort(arr) {
  let currSum = 0;
  let largestSum = -Infinity;
  let startIdx = 0;
  let endIdx = 0;

  let maxStartIdx = 0;
  let maxEndIdx = 0;


  for(let i = 0; i < arr.length; i++) {
    let currValue = arr[i];
    currSum += currValue;
    if(currSum > 0) {
      endIdx++;

      if(currSum > largestSum) {
        maxEndIdx = i;
      }

      endIdx++;
    } else {
      currSum -= arr[i];
      if(currSum > largestSum) {
        maxStartIdx = startIdx;
      }

      i++;
      currValue = arr[i];
      currSum = currValue;
      startIdx = i;
    }
  }

  return arr.slice(maxStartIdx, maxEndIdx + 1);
}

console.log(subSort([2, -8, 3, -2, 4, -10]));
// whenever currSum is negative, ignore whatever came before that
// start again with the next element
