class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function inverseBinaryTree(root) {
  if(root === null) {
    return;
  }
  if(root !== null && noChildren(root)) {
    return;
  }

  let temp = root.left;
  root.left = root.right;
  root.right  = temp;

  inverseBinaryTree(root.left);
  inverseBinaryTree(root.right);
}

function noChildren(root) {
  return root.left === null && root.right === null;
}

// function switchsies(root) {
//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;
// }

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
  let answer = [];
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
    answer.push(currentNode);
  }

  return answer;
}


let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;

BFS(a);
inverseBinaryTree(a);
BFS(a);
// switchsies(a);
// preOrderTraversal(a);
// BFS(a);
