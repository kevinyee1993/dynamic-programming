var flipAndInvertImage = function(A) {

};

function flipImage(arr) {
  for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

const a = [0,1,2,3,4];
console.log(flipImage(a));
