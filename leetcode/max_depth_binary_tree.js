// O(n) time where n is the depth? of the tree
// O(n) space 
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function maxDepth(root) {
  if(!root) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  let bigDepth;

  if(leftDepth > rightDepth) {
    bigDepth = leftDepth;
  } else {
    bigDepth = rightDepth;
  }

  return 1 + bigDepth;
}


































// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
//
// function maxDepthBinaryTree(root) {
//   if(root === null) {
//     return 0;
//   }
//
//   let leftDepth = maxDepthBinaryTree(root.left);
//   let rightDepth = maxDepthBinaryTree(root.right);
//   let bigDepth;
//
//   if(leftDepth > rightDepth) {
//     bigDepth = leftDepth;
//   } else {
//     bigDepth = rightDepth;
//   }
//
//   return bigDepth + 1;
// }
