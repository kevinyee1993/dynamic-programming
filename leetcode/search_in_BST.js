class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


// this is implementing DFS if using recursion bc of stacks
// BFS uses queue and no recursion typically
function searchBST(root, val) {
  if(root === null) {
    return null;
  }

  if(root.value === val) {
    return root;
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

let a = new TreeNode(5);

let b = new TreeNode(3);
let c = new TreeNode(2);
let d = new TreeNode(1);

let e = new TreeNode(7);
let f = new TreeNode(6);
let g = new TreeNode(8);

a.left = b;
a.right = e;
b.left = c;
b.right = d;
e.left = f;
e.right = g;

console.log(searchBST(a, 10));
