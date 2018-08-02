class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// function inverseBinaryTree(root) {
//   if(root === null || root.left === null && root.right === null) {
//     return;
//   }
//
//   console.log(root.value);
//
//   let temp = root.left;
//   root.left = root.right;
//   root.right  = temp;
//
//   inverseBinaryTree(root.left);
//   inverseBinaryTree(root.right);
// }

function switchsies(root) {
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
}

function inOrderTraversal(root) {
  if(root) {
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
  }
}

function preOrderTraversal(root) {
  if(root) {
    console.log(root.value);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

function BFS(root) {
  let queue = [root];
  // let queue = [root];

  while(queue.length > 0) {
    let currentNode = queue.shift();
    // console.log(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right) {
      queue.push(currentNode.right);
    }

    console.log(currentNode.value);
  }
}


let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;

// inverseBinaryTree(a);
// switchsies(a);
// preOrderTraversal(a);
BFS(a);
