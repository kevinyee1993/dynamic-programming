// O(n) time and O(n) space
function searchRotatedArray(arr, target) {
  // O(n) time
  let slicePoint = findElementDrop(arr);

  // O(n) space
  let big = arr.slice(0, slicePoint);
  let small = arr.slice(slicePoint, arr.length);
  let newSorted = small.concat(big);

  // O(log(n)) time
  return binarySearch(newSorted, target) + slicePoint;

}

// O(n) time, O(1) space
function findElementDrop(arr) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i + 1] < arr[i]) {
      return i + 1;
    }
  }

  // base case if the array is already sorted
  return 0;
}


// remember this should return the index
// doing this the space intensive way but whatevs
function binarySearch(arr, target) {
  if(arr.length === 0) {
    return -1;
  } else if(arr.length === 1 && arr[0] === target) {
    return 0;
  } else if(arr.length === 1 && arr[0] !== target) {
    return -1;
  }

  let midPoint = Math.floor(arr.length / 2);

  if(arr[midPoint] === target) {
    return midPoint;
  } else if(arr[midPoint] > target) {
    return binarySearch(arr.slice(0, midPoint), target);
  } else if(arr[midPoint] < target) {
    let store = binarySearch(arr.slice(midPoint, arr.length), target);
    if(store === -1) {
      return -1;
    } else {
      return midPoint + store;
    }
  }
}

let test = [15,16,19,20,25,1,3,4,5,7,10,14];
console.log(searchRotatedArray(test, 5));
// let sortedBorted = [1,3,10,11];
// console.log(binarySearch(sortedBorted, 11));
// console.log(findElementDrop(test));
