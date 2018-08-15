function spiralPrint(matrix) {
  let rightLimit = matrix[0].length;
  let leftLimit = 0;
  let upLimit = 0;
  let downLimit = matrix.length;

  let currX = 0;
  let currY = 0;

  let currDirection = "right";

  let numElements = matrix.length * matrix[0].length;

  console.log(numElements);

  // loops through every single element
  for(let i = 0; i < numElements; i++) {
    switch(currDirection) {
      case "right":
        console.log(matrix[currY][currX]);
        currX++;

        if(currX >= rightLimit) {
          currDirection = "down";
          rightLimit--;
        }
        break;
      case "down":
        console.log(matrix[currY][currX]);
        currY++;

        if(currY >= downLimit) {
          currDirection = "left";
          downLimit--;
        }
        break;
      case "left":
        console.log(matrix[currY][currX]);
        currX--;

        if(currX <= leftLimit) {
          currDirection = "up";
          leftLimit++;
        }
        break;
      case "up":
      console.log(matrix[currY][currX]);
      currY--;

      if(currX <= upLimit) {
        currDirection = "right";
        leftLimit++;
      }
      break;
    }
  }
}

function changeDirection(dir) {
  switch(dir) {
    case 'right': return "down";
    case 'down': return "left";
    case 'left': return "up";
    case 'up': return "right";
  }
}

let matrix = [[1,2,3],[4,5,6],[1,2,3],[1,2,3]];
spiralPrint(matrix);
