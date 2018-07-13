// right now O(n^2) time because nested loops
// O(1) space because changing the original array without creating new

var flipAndInvertImage = function(A) {
  for(let i = 0; i < A.length; i++) {
    flipImage(A[i]);
    invertImage(A[i]);
  }

  return A;
 };

function flipImage(arr) {
  for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

function invertImage(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }

  return arr;
}

const a = [[0,0,0], [1,1,1], [0,0,1]];
console.log(flipAndInvertImage(a));
