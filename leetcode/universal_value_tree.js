class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = this.left = null;
  }
}

function countUnivalTrees(head) {
  let count = 0;

  if(!head) {
    return 0;
  }

  if(isUnivalTree(head)) {
    count = 1;
  }

  return count + countUnivalTrees(head.left) + countUnivalTrees(head.right);
}


// O(n) time where n is the amount of nodes in the tree
// O(n) space where n is the depth of the stack trace
function isUnivalTree(head) {
  if(!head) {
    return false;
  }

  if(!head.left && !head.right) {
    return true;
  }

  let isLeftUnival = !head.left || isUnivalTree(head.left);
  let isRightUnival = !head.right || isUnivalTree(head.right);

  if(isLeftUnival && isRightUnival) {
    return ( (!head.left || head.left.value === head.value)
    && (!head.right || head.right.value === head.value));
  }

  return false;
}

let a = new TreeNode(0);
let b = new TreeNode(1);
let c = new TreeNode(0);

let d = new TreeNode(1);
let e = new TreeNode(0);

c.left = d;
c.right = e;

let f = new TreeNode(1);
let g = new TreeNode(1);

d.left = f;
d.right = g;


a.left = b;
a.right = c;

console.log(countUnivalTrees(a));
