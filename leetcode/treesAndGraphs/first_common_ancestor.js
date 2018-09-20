// without reference to parent
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function firstCommonAncestor(head) {

}


// good opportunity to practice DFS and BFS
// actually not sure but practice those anyways
function treeContainsNode(head, target) {
  if(!head) {
    return false;
  }

  if(head.value === target) {
    return true;
  }

  let leftCheck = treeContainsNode(head.left, target);
  let rightCheck = treeContainsNode(head.right, target);

  return leftCheck || rightCheck;
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;

console.log(treeContainsNode(b, 4));
