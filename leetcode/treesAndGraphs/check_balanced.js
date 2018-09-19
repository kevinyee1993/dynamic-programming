class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// time: O(n)
// space: O(n)
function checkBalanced(root) {
  let leftDepth = findDepth(root.left);
  let rightDepth = findDepth(root.right);

  let difference = Math.abs(leftDepth - rightDepth);

  return difference <= 1;
}

// time: O(n)
// space: O(n)
function findDepth(root) {
  if(!root) {
    return 0;
  }

  let leftDepth = findDepth(root.left);
  let rightDepth = findDepth(root.right);

  let bigDepth;

  if(leftDepth > rightDepth) {
    bigDepth = leftDepth;
  } else {
    bigDepth = rightDepth;
  }

  return 1 + bigDepth;
}

let a = new TreeNode(1);
let b = new TreeNode(1);
let c = new TreeNode(1);

a.left = b;
b.right = c;
console.log(checkBalanced(a));
