// time = O(n) where n is the number of nodes that needs to be traversed

// space = O(n) where the depth of the recursion tree can go up to n in the
// case of a skewed tree. Average case would be O(log(n)) because binary tree yadadamean

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }

var mergeTrees = function(t1, t2) {
  if(t1 === null && t2 === null) {

    return null;
  } else if(t1 === null) {
    return t2;
  } else if(t2 === null) {
    return t1;
  }

  let combinedVal = t1.val + t2.val;
  let newNode = new TreeNode(combinedVal);
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);

  return newNode;
};
