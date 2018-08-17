function spiralPrint(matrix) {
  let rightLimit = matrix[0].length;
  let leftLimit = 0;
  let upLimit = 0;
  let downLimit = matrix.length;

  let currX = 0;
  let currY = 0;

  let currDirection = "right";

  let numElements = matrix.length * matrix[0].length;

  // loops through every single element
  for(let i = 0; i < numElements; i++) {

    switch(currDirection) {
      case "right":
        console.log(matrix[currY][currX]);
        currX++;

        if(currX >= rightLimit) {
          currX--;
          currDirection = "down";
          rightLimit--;
          break;
        }
        break;
      case "down":
        currY++;

        if(currY >= downLimit) {
          currDirection = "left";
          currY--;
          downLimit--;
          break;
        }

        console.log(matrix[currY][currX]);
        break;
      case "left":
        currX--;

        if(currX <= leftLimit) {
          console.log(matrix[currY][currX]);
          currDirection = "up";
          currX++;
          leftLimit++;
          break;
        }
        console.log(matrix[currY][currX]);
        break;
      case "up":
      currY--;

      if(currY <= upLimit) {
        console.log(matrix[currY][currX]);
        currDirection = "right";
        currY++;
        upLimit++;
        break;
      }

      console.log(matrix[currY][currX]);
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

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
spiralPrint(matrix);
