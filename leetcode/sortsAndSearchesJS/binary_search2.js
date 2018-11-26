// O(log(n)) time
// O(log(n)) space
function binarySearch(arr, start, end, target) {
  // console.log(start, end);
  if(start >= end ) {
    if(arr[start] === target) {
      return start;
    } else {
      return null;
    }
  }

  const midIdx = Math.floor((start + end) / 2);
  console.log(arr[midIdx], target);

  if(arr[midIdx] === target) {
    return midIdx;
  } else if(arr[midIdx] > target) {
    return binarySearch(arr, start, midIdx - 1, target);
  } else {
    return binarySearch(arr, midIdx + 1, end, target);
  }
}

let test = [1,2,3,4,5];
console.log(binarySearch(test, 0, test.length - 1, 5));
