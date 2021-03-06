// O(nd) time where n is the number of elements and d is the number of call stacks
// O(n) space where n is the number of elements
function findLongestColor(graph) {
  const visitedNodes = initializeVisitedHash(graph);
  const biggest = { count: 0, color: null };

  for(let row = 0; row < graph.length; row++) {
    for(let col = 0; col < graph[0].length; col++) {
      if(!visitedNodes[row][col]) {
        let currColor = graph[row][col];
        let currCount = { };
        currCount[currColor] = 1;
        visitedNodes[row][col] = true;


        traverseGraph(row, col+1, currCount, visitedNodes, currColor, graph);
        traverseGraph(row, col-1, currCount, visitedNodes, currColor, graph);
        traverseGraph(row+1, col, currCount, visitedNodes, currColor, graph);
        traverseGraph(row-1, col, currCount, visitedNodes, currColor, graph);

        if(currCount[currColor] > biggest.count) {
          biggest.count = currCount[currColor];
          biggest.color = currColor;
        }
      }
    }
  }

  return biggest;
}

// O(n) time where n is the number of elements in the graph
// O(d) space where d is the number of call stacks
function traverseGraph(row, col, currCount, visitedNodes, prevColor, graph) {
  if(!graph[row] || !graph[row][col]) {
    return;
  }

  let currColor = graph[row][col];
  if(!visitedNodes[row][col] && currColor === prevColor) {
    visitedNodes[row][col] = true;
    currCount[currColor]++;
    traverseGraph(row, col+1, currCount, visitedNodes, currColor, graph);
    traverseGraph(row, col-1, currCount, visitedNodes, currColor, graph);
    traverseGraph(row+1, col, currCount, visitedNodes, currColor, graph);
    traverseGraph(row-1, col, currCount, visitedNodes, currColor, graph);
  } else {
    return;
  }
}

// O(r) time where r is the num of rows
// O(r) space where r is the num of rows;
function initializeVisitedHash(graph) {
  const visitedNodes = {};

  for(let i = 0; i < graph.length; i++) {
    visitedNodes[i] = {};
  }

  return visitedNodes;
}

let graph = [
  ['g','g','b','r'],
  ['g','b','r','b'],
  ['r','b','b','b']
];

console.log(findLongestColor(graph));
