class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// O(n) time where n is number of nodes
// O(k) space where k is the number of stack frames
function lowestCommonAncestor(head, node1, node2) {
  if(!head) {
    return null;
  }

  if(head.value === node1 || head.value === node2) {
    return head.value;
  }

  let left = lowestCommonAncestor(head.left, node1, node2);
  let right = lowestCommonAncestor(head.right, node1, node2);

  if(left && right) {
    return head.value;
  } else if(left) {
    return left;
  } else {
    return right;
  }
}

let node1 = new TreeNode(10);
let node2 = new TreeNode(-10);
let node3 = new TreeNode(30);

node1.left = node2;
node1.right = node3;

let node4 = new TreeNode(8);
node2.right = node4;

let node5 = new TreeNode(6);
let node6 = new TreeNode(9);
node4.left = node5;
node4.right = node6;

let node7 = new TreeNode(25);
let node8 = new TreeNode(60);
node3.left = node7;
node3.right = node8;

let node9 = new TreeNode(28);
let node10 = new TreeNode(78);
node7.right = node9;
node8.right = node10;

console.log(lowestCommonAncestor(node1, 6, 9));
