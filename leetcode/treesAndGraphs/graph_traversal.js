function findLongestColor(graph) {
  const visitedNodes = initializeVisitedHash(graph);
  const biggest = { count: 0, color: null };
}

function initializeVisitedHash(graph) {
  const visitedNodes = {};

  for(let i = 0; i < graph.length; i++) {
    visitedNodes[i] = {};
  }

  return visitedNodes;
}
