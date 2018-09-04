// O(log(n)) time
// O(n) space because recursive call

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function searchBST(root, val) {
  if(!root) {
    return null;
  }

  if(root.val === val) {
    return root;
  }

  if(val > root.val) {
    return searchBST(root.right, val);
  } else if (val < root.val) {
    return searchBST(root.left, val);
  }

}

let a = new TreeNode(6);
let b = new TreeNode(3);
let c = new TreeNode(8);

a.left = b;
a.right = c;

console.log(searchBST(a, 8));
