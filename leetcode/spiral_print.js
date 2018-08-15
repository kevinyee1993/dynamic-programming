function spiralPrint(matrix) {
  let rightLimit = matrix[0].length;
  let leftLimit = 0;
  let upLimit = 0;
  let downLimit = matrix.length;

  let currX = 0;
  let currY = 0;

  let numElements = matrix.length * matrix[0].length;

  console.log(numElements);

  // loops through every single element
  // for(let i = 0; i < numElements; i++) {

  // }
}

let matrix = [[1,2,3],[4,5,6],[1,2,3],[1,2,3]];
spiralPrint(matrix);
