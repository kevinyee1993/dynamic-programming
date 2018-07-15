function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }

var mergeTrees = function(t1, t2) {
  let t1Val;
  let t2Val;
  let t1Left;
  let t1Right;
  let t2Left;
  let t2Right;

  if(t1 === null) {
    t1Val = null;
     t1Left = null;
     t1Right = null;
  } else {
    t1Val = t1.val;
    t1Left = t1.left;
    t1Right = t1.right;
  }
  if(t2 === null) {
    t2Val = null;
     t2Left = null;
     t2Right = null;
  } else {
  t2Val = t2.val;
  t2Left = t2.left;
  t2Right = t2.right;
}

  let combinedVal = t1Val + t2Val;
  let newNode = new TreeNode(combinedVal);

  newNode.left = mergeTrees(t1Left + t2Left);
  newNode.right = mergeTrees(t1Right + t2Right);

  return newNode;
};
