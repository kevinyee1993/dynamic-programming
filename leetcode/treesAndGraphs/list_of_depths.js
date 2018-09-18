class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


function listOfDepths(root) {
  const depthTracker = {};

  // depthTracker should be updated as it is passed in,
  // so nothing really needs to be returned
  helper(root, 1, depthTracker);
  return depthTracker;
}

function helper(root, currDepth, depthTracker) {
  if(!root) {
    return;
  }

  if(!depthTracker[currDepth]) {
    depthTracker[currDepth] = [root];
  } else {
    depthTracker[currDepth].push(root);
  }

  helper(root.left, currDepth + 1, depthTracker);
  helper(root.right, currDepth + 1, depthTracker);
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
d.left = e;

console.log(listOfDepths(a));
