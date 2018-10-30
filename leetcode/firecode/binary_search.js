// O(log(n)) time
// O(n) space

function binarySearch(arr, target) {
  return helper(arr, target, 0, arr.length - 1);
}

function helper(arr, target, start, end) {
  const midIdx = Math.floor((start + end) / 2);
  if(arr[midIdx] === target) {
    return midIdx;
  }

  if(arr.length <= 1) {
    return null;
  }

  if(arr[midIdx] > target) {
    return helper(arr, target, start, midIdx - 1);
  } else if(arr[midIdx] < target) {
    return helper(arr, target, midIdx + 1, end);
  }
}


console.log(binarySearch([1,3,5,8,9,13], 9));
