//solution 1
//time: O(n^2)
//space: O(n)

function rotateMatrix(matrix) {
  let rotatedMatrix = [];

  for(let col = 0; col < matrix.length; col++) {
    let innerArr = [];

    for(let row = matrix.length - 1; row > -1; row--) {
      innerArr.push(matrix[row][col]);
    }

    rotatedMatrix.push(innerArr);
  }

  return rotatedMatrix;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));
