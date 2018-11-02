// can do DFS on one node
// or BFS whatever
// keep going until you find node 2
// O(n) time where n is the number of nodes in the graph
// O(n) space because of the nodeQueue

// say each node his child nodes which refer to
// what it's pointing at
function routeBetweenNodes(node1, node2) {
  let nodeQueue = [node1];

  // does a BFS search on current node
  while(nodeQueue.length > 0) {
    let firstNode = nodeQueue.pop();
    if(firstNode === node2) {
      return true;
    }

    nodeQueue = nodeQueue.concat(firstNode.children);
  }

  return false;
}
