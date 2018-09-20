// without reference to parent
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// with reference to parent node
class TreeNodeWithParent {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = this.right = null;
  }
}

// time: O(nlog(n))
// space: O(n)

function firstCommonAncestor(head, node1, node2) {

  if(!head) {
    return null;
  }

  let leftCheck = headContainsNodes(head.left, node1, node2);
  let rightCheck = headContainsNodes(head.right, node1, node2);

  if(leftCheck) {
    return firstCommonAncestor(head.left, node1, node2);
  } else if (rightCheck) {
    return firstCommonAncestor(head.right, node1, node2);
  } else {
    return head;
  }

}

function headContainsNodes(head, node1, node2) {
  return treeContainsNode(head, node1) && treeContainsNode(head, node2);
}

// O(n) space where n is the depth of the tree
// O(n) time where n is the number of nodes in the tree
function treeContainsNode(head, target) {
  if(!head) {
    return false;
  }

  if(head.value === target.value) {
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

b.parent = a;
c.parent = b;
d.parent = b;

a.left = b;
b.right = c;
b.left = d;

// console.log(firstCommonAncestor(a, c, d));

function firstCommonAncestorWithParent(head, node1, node2) {

}

function findDepth(head) {
  if(!head.parent) {
    return 1;
  } else {
    return 1 + findDepth(head.parent);
  }
}
