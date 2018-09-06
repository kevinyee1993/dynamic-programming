function outOfPlace(arr) {
  // O(n) time and space to create array duplicate
  const outCounter = findOuts([...arr]);
  if(outCounter > 1) {
    return 0;
  }

  let count = 0;
  return findRemoves(arr);

}

// O(n) time
// O(1) space
function findOuts(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1]) {
      count++;
      arr[i] = arr[i + 1];
    } else if(arr[i] < arr[i - 1]) {
      count++;
      arr[i] = arr[i - 1];
    }
  }

  return count;
}

// O(n) time
// O(1) space
function findRemoves(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1] || arr[i] < arr[i - 1]) {
      count++;
    }
  }

  return count;
}

// console.log(findOuts([1,2,3,5,4,6,7,2,4,8]));
console.log(outOfPlace([1,2,3,5,4,6,1]));
