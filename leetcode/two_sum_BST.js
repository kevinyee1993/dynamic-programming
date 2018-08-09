class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(6);
let b = new TreeNode(3);
let c = new TreeNode(8);

a.left = b;
a.right = c;
//
// let d = new TreeNode(3);
// let e = new TreeNode(5);
//
// b.left = d;
// b.right = e;
//
// let f = new TreeNode(7);
// let g = new TreeNode(9);
//
// c.left = f;
// c.right = g;



// just returns true if finds the value in the tree
// will eventually need to account for not searching for the root node itself
// for example if the target is 10 and the root node is 5, that would return
// true even if there isn't a second 5 because you binary search the first one
// giving you 2 5s yadadamean
// maybe in the main function you can binary search the left and the right side separately
// which gives you 2log(n) time which simplifies to log(n) time
function binarySearch(root, target) {

  if(target === root.value) {
    return true;
  } else if(root.left === null && root.right === null && target !== root.value) {
    return false;
  }

  if(root.value > target && root.left) {
    return binarySearch(root.left, target);
  }

  if(root.value < target && root.right) {
    return binarySearch(root.right, target);
  }

  // if target is less than the current root's value but there's no left node,
  // then the two if statements will not be executed so you just return false
  return false;
}


function findTarget(root, k) {
  // O(n) space, creates a BST type of deal
  let queue = [root];

  while(queue.length > 0) {
    let currentNode = queue[0];
    if(currentNode.left) {
      queue.push(currentNode.left);
    }

    if(currentNode.right) {
      queue.push(currentNode.right);
    }

    let nodeToCheck = queue.shift();
    let valueToFind = k - nodeToCheck.value;

    if(root.value !== valueToFind) {
      if(binarySearch(root, valueToFind)) {
        return true;
      }
    } else if(nodeToCheck.left.value === valueToFind){
      return true;
    }

  }

  return false;
}

// console.log(binarySearch(a, 3));
console.log(findTarget(a, 11));
