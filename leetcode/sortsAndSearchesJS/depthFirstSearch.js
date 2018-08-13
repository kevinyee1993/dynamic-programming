class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function depthFirstSearch(root, target) {

  if(root === null) {
    return null;
  } else if(root.value === target) {
    return root;
  }

  let leftCheck = depthFirstSearch(root.left, target);
  let rightCheck = depthFirstSearch(root.right, target);

  if(leftCheck) {
    return leftCheck;
  }

  if(rightCheck) {
    return rightCheck;
  }

}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);

let f = new TreeNode(6);
let g = new TreeNode(7);
let h = new TreeNode(8);
let i = new TreeNode(9);
let j = new TreeNode(10);

a.left = b;
b.left = c;
c.left = d;
d.left = e;

a.right = f;
f.right = g;
g.right = h;
h.right = i;
i.right = j;


console.log(depthFirstSearch(a, 10));
