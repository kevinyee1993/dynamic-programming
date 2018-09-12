class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


// turns binary tree to array
function flattenBinaryTree(head) {
  if(!head) {
    return [];
  }
  // current, left, right
  let store = [];
  store.push(head);

  store += flattenBinaryTree(head.left);
  store += flattenBinaryTree(head.right);

  return store;
}

function changeThings(store) {
  for(let i = 0; i < store.length - 1; i++) {
    store[i].left = null;
    store.right = store[i + 1];
  }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(5);
let d = new TreeNode(3);
let e = new TreeNode(4);
let f = new TreeNode(6);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

let store = flattenBinaryTree(a);
changeThings(store);
printTree(a);

function printTree(head) {
  let curr = head;

  while(curr) {
    console.log(curr.value);
    curr = curr.right;
  }
}
