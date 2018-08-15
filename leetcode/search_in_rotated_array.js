function searchRotatedArray(arr, target) {

}

// O(n) time
function findElementDrop(arr) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i + 1] < arr[i]) {
      return i + 1;
    }
  }

  // base case if the array is already sorted
  return 0;
}

let test = [5,7,9,1,3,4];
console.log(findElementDrop(test));
