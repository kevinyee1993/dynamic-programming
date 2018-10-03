class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function leafSimilar(root1, root2) {
  let leftLeaves = getLeaves(root1);
  let rightLeaves = getLeaves(root2);

  return compareArrs(leftLeaves, rightLeaves);
}

// O(n + m) space where n is the number of nodes
// O(n + m) time where n is the number of nodes..??
function getLeaves(root) {
  if(!root.left && !root.right) {
    return [root.val];
  }

  let left = getLeaves(root.left);
  let right = getLeaves(root.right);
  return left.concat(right);
}


// O(n) time where n is length of either one of the arrays
// O(1) space
function compareArrs(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');

a.left = b;
a.right = c;

c.left = d;
c.right = e;

console.log(getLeaves(a));
