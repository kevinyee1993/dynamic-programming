function smallestDifference(a, b) {
  // implement your own quicksort after this
  // remember sort doesn't sort numbers like how you'd expect
  a = quickSort(a);
  b = quickSort(b);

  let smallestDiff = Infinity;

  let aTrack = a.length - 1;
  let bTrack = b.length - 1;

  while(aTrack > 0 || bTrack > 0) {
    let currDiff = Math.abs(b[bTrack] - a[aTrack]);

    if(currDiff < smallestDiff) {
      smallestDiff = currDiff;
    }

    if(bTrack > 0) {
      bTrack--;
    } else {
      aTrack--;
    }
  }

  return smallestDiff;
}

function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  let midPoint = arr.shift();
  let left = [];
  let right = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= midPoint) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([midPoint]).concat(quickSort(right));
}

let a = [1,3,15,11,2];
// let a = [1,2,3,11,15];
let b = [23,127,235,19,8];
// let b = [8,19,23,127,235];


console.log(smallestDifference(a,b));

// console.log(quickSort(a));
