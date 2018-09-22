class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = this.left = null;
  }
}


function countUnivalTrees(head) {

}

function isUnivalTree(head) {
  if(!head) {
    return false;
  }

  if(!head.left && !head.right) {
    return true;
  }

  let isLeftUnival = !head.left || isUnivalTree(head.left);
  let isRightUnival = !head.right || isUnivalTree(head.right);

  if(isLeftUnival && isRightUnival) {
    return ( (!head.left || head.left.value === head.value)
    && (!head.right || head.right.value === head.value));
  }

  return false;
}

let a = new TreeNode(1);
let b = new TreeNode(1);
let c = new TreeNode(1);

a.left = b;
a.right = c;
