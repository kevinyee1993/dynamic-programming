function binarySearch(arr, target) {
  if(arr.length <= 1 && arr[0] !== target) {
    return -1;
  } else if(arr.length === 1 && arr[0] === target) {
    return 0;
  }

  let midPoint = Math.floor(arr.length / 2);

  let left = arr.slice(0, midPoint);
  let right = arr.slice(midPoint, arr.length);

  if(target === arr[midPoint]) {
    return midPoint;
  } else if (target < arr[midPoint]) {
    return binarySearch(left, target);
  } else {
    let store = binarySearch(right, target);
    if(store === -1) {
      return -1;
    } else {
      return midPoint + store;
    }
  }
}

// let a = [1,2,3,4,5,6,7,8,9];
let a = [2,3,4];
console.log(binarySearch(a, 4));
