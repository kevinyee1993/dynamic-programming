// O(n) time and O(1) space
function findSingleNumber(arr) {
  let store = 0;

  for(let i = 0; i < arr.length; i++) {
    store ^= arr[i];
  }

  return store;
}

console.log(findSingleNumber([2,2,1]));
