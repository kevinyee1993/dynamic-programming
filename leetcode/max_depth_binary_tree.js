class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepthBinaryTree(root) {
  if(root === null) {
    return 0;
  }

  let leftDepth = maxDepthBinaryTree(root.left);
  let rightDepth = maxDepthBinaryTree(root.right);
  let bigDepth;

  if(leftDepth > rightDepth) {
    bigDepth = leftDepth;
  } else {
    bigDepth = rightDepth;
  }

  return bigDepth + 1;
}
