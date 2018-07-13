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

const a = [0,0,0,1,1,1,0,1];
console.log(invertImage(a));
