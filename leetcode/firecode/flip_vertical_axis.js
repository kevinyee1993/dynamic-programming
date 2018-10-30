// O(n) time where n is amount of elements in matrix
// O(1) space
function flipItVeritcalAxis(matrix) {
  matrix.forEach(row => {
    flipItHorizontalAxis(row);
  });

  return matrix;
}

function flipItHorizontalAxis(arr) {
  for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

let matrix = [
  [1,2,3],
  [1,2,3],
  [1,2,3]
];

console.log(flipItVeritcalAxis(matrix));
