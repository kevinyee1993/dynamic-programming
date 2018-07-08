class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function minDiffInBST(rootNode) {
  let orderedArray = inOrderTraversal(rootNode);

  // doesn't really matter what starting value here is as long as it's really big
  let minDiff = orderedArray[orderedArray.length - 1];

  for(let i = 0; i < orderedArray.length - 1; i++) {
    let currDiff = orderedArray[i + 1] - orderedArray[i];
    if(currDiff < minDiff) {
      minDiff = currDiff;
    }
  }

  return minDiff;
}

function inOrderTraversal(rootNode) {
  if(rootNode === null) {
    return [];
  } else if(rootNode.left === null && rootNode.right === null) {
    return rootNode.val;
  }

  let leftArray = inOrderTraversal(rootNode.left);
  let rightArray = inOrderTraversal(rootNode.right);

  return leftArray + [rootNode.val] + rightArray;
}

let a = new TreeNode(4);
let b = new TreeNode(2);
let c = new TreeNode(6);

let d = new TreeNode(1);

let e = new TreeNode(7);

a.left = b;
a.right = c;
// b.left = d;
// c.right = e;m

// console.log(inOrderTraversal(a));
console.log(minDiffInBST(a));
