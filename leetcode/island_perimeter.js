function islandPerimeter(grid) {
  let landHo = findFirstLand(grid);
  return DFSPerimeter(grid, landHo[0], landHo[1]);
}


// O(n) time, O(1) space
function findFirstLand(grid) {
  let foundLand = null;

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === 1) {
        return [row, col];
      }
    }
  }

  return foundLand;
}

// need way to keep track of visited nodes
function DFSPerimeter(grid, row, col, visited = {}) {
  if(!grid[row] || grid[row][col] !== 1) {
    return 0;
  }

  let perimeter = findPerimeter(grid, row, col);

  grid[row][col] = 2;

  let leftSearch = DFSPerimeter(grid, row, col - 1);
  let rightSearch = DFSPerimeter(grid, row, col + 1);
  let upSearch = DFSPerimeter(grid, row - 1, col);
  let downSearch = DFSPerimeter(grid, row + 1, col);

  return perimeter + leftSearch + rightSearch + upSearch + downSearch;
}


// O(1) time and space
function findPerimeter(grid, row, col) {
  let neighborCount = 0;

  if(grid[row] && grid[row][col - 1]) { neighborCount++; }
  if(grid[row] && grid[row][col + 1]) { neighborCount++; }
  if(grid[row - 1] && grid[row - 1][col]) { neighborCount++; }
  if(grid[row + 1] && grid[row + 1][col]) { neighborCount++; }

  switch(neighborCount) {
    case 0: return 4;
    case 1: return 3;
    case 2: return 2;
    case 3: return 1;
    case 4: return 0;
    default: return null;
  }
}

let grid = [
  [0,1,1],
  [0,1,1]
];

console.log(DFSPerimeter(grid, 0, 1));
