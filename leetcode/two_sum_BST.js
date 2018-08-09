class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(6);
let b = new TreeNode(4);
let c = new TreeNode(8);

a.left = b;
a.right = c;

let d = new TreeNode(3);
let e = new TreeNode(5);

b.left = d;
b.right = e;

let f = new TreeNode(7);
let g = new TreeNode(9);

c.left = f;
c.right = g;

// solution 2 using hashes
function findTarget(root, k) {
  let nodesArray = createArrayFromRoot(root); // return array of all elements O(n) time and space

  // create hash from the array O(n) time and space
  let nodesHash = {};
  nodesArray.forEach( node => {
    if(!nodesHash[node.value]) {
      nodesHash[node.value] = 1;
    } else {
      nodesHash[node.value]++;
    }
  });

  // loop through nodesArray and look up the target value - current value in hash O(n) time O(1) space
  for(let i = 0; i < nodesArray.length; i++) {
    let valueToFind = k - nodesArray[i].value;

    if(k !== nodesArray[i].value && nodesHash[valueToFind] >= 1) {
      return true;
    } else if(nodesHash[valueToFind] >= 2) {
      return true;
    }
  }

  return false;

}


// O(n) time and space
function createArrayFromRoot(root) {
  let nodesArray = [root];
  let currentNode = root;
  let counter = 0;

  while(currentNode.left || currentNode.right) {
    if(currentNode.left) {
      nodesArray.push(currentNode.left);
    }

    if(currentNode.right) {
      nodesArray.push(currentNode.right);
    }

    counter++;
    currentNode = nodesArray[counter];
  }

  return nodesArray;
}

console.log(findTarget(a, 99));





// solution 1 using bst
//
//
// // just returns true if finds the value in the tree
// // will eventually need to account for not searching for the root node itself
// // for example if the target is 10 and the root node is 5, that would return
// // true even if there isn't a second 5 because you binary search the first one
// // giving you 2 5s yadadamean
// // maybe in the main function you can binary search the left and the right side separately
// // which gives you 2log(n) time which simplifies to log(n) time
// function binarySearch(root, target) {
//
//   if(target === root.value) {
//     return true;
//   } else if(root.left === null && root.right === null && target !== root.value) {
//     return false;
//   }
//
//   if(root.value > target && root.left) {
//     return binarySearch(root.left, target);
//   }
//
//   if(root.value < target && root.right) {
//     return binarySearch(root.right, target);
//   }
//
//   // if target is less than the current root's value but there's no left node,
//   // then the two if statements will not be executed so you just return false
//   return false;
// }
//
//
// function findTarget(root, k) {
//   // O(n) space, creates a BST type of deal
//   let queue = [root];
//
//   while(queue.length > 0) {
//     let currentNode = queue[0];
//     if(currentNode.left) {
//       queue.push(currentNode.left);
//     }
//
//     if(currentNode.right) {
//       queue.push(currentNode.right);
//     }
//
//     let nodeToCheck = queue.shift();
//     let valueToFind = k - nodeToCheck.value;
//
//     if(root.value !== valueToFind) {
//       if(binarySearch(root, valueToFind)) {
//         return true;
//       }
//     } else if(nodeToCheck.left.value === valueToFind){
//       return true;
//     }
//
//   }
//
//   return false;
// }
//
// // console.log(binarySearch(a, 3));
// console.log(findTarget(a, 11));
