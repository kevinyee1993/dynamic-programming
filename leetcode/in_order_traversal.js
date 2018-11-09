class treeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// O(n) time
// O(n) space
function inorderTraversal(root) {
  if(!root) {
    return [];
  }

  const output = [root.value];

  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);

  // if(left.length === 0 && right.length > 0) {
  //   left = [null];
  // }

  return left.concat(output).concat(right);
}

let a = new treeNode(1);
let b = new treeNode(2);
let c = new treeNode(3);

a.right = b;
b.left = c;

console.log(inorderTraversal(a));
