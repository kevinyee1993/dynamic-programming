function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  // might need to check this not exactly sure
  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {

  let mergedArr = [];
  let smaller = arr1;
  let bigger = arr2;

  if(arr1.length > arr2.length) {
    smaller = arr2;
    bigger = arr1;
  }

  while(smaller.length > 0 && bigger.length > 0) {
    if(smaller[0] <= bigger[0]) {
      mergedArr.push(smaller.shift());
    } else {
      mergedArr.push(bigger.shift());
    }
  }

  mergedArr = mergedArr.concat(smaller);
  mergedArr = mergedArr.concat(bigger);

  return mergedArr;
}

let farts = [41,25,215 ];
console.log(mergeSort(farts));

// let a = [1,3];
// let b = [2,4,6];
// console.log(merge(a,b));
