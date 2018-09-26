// O(n) time
// O(1) space
function randomize(arr) {
  for(let i = 0; i < arr.length; i++) {
    let point1 = i;
    let point2 = Math.floor(Math.random() * arr.length);
    swap(arr, point1, point2);
  }

  return arr;
}

function swap(arr, point1, point2) {
  let temp = arr[point1];
  arr[point1] = arr[point2];
  arr[point2] = temp;
}

const arr = [1,0,3,9,2];
console.log(randomize(arr));
