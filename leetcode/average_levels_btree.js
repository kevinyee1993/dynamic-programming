class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function averageOfLevels(root) {
  if(!root.left && !root.right) {
    return [root];
  }
}
