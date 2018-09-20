class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


// time: O(n) because evaluating every node once
// space: O(n) where n is the depth of the tree
function validateBST(head) {
  // left <= head
  // right > head
  // good to go
  // if all these things are true for my subtree, good to go
  if(!head) {
    return true;
  }

  let leftSmaller = false;
  let rightBigger = false;

  if(head.left) {
    if(head.left.value <= head.value) {
      leftSmaller = true;
    }
  } else {
    leftSmaller = true;
  }

  if(head.right) {
    if(head.right.value > head.value) {
      rightBigger = true;
    }
  } else {
    rightBigger = true;
  }

  let check = (leftSmaller) && (rightBigger);


  let leftCheck = validateBST(head.left);
  let rightCheck = validateBST(head.right);

  return check && leftCheck && rightCheck;
}

let a = new TreeNode(3);
let b = new TreeNode(1);
let c = new TreeNode(5);

let d = new TreeNode(2);
let e = new TreeNode(4);
let f = new TreeNode(1);

a.left = b;
a.right = c;

b.right = d;
c.left = e;
c.right = f;


console.log(validateBST(a));
