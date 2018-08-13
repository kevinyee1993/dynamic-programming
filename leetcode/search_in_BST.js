class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


// this is implementing DFS if using recursion bc of stacks
// BFS uses queue and no recursion typically
function searchBST(root, val) {
  if(root.value === val) {
    return root;
  } if(root === null) {
    return null;
  }

  let left = searchBST(root.left, val);
  let right = searchBST(root.right, val);

  if(left) {
    return left;
  }

  if(right) {
    return right;
  }
}
