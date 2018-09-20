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
a.right = c;
b.left = d;

// console.log(firstCommonAncestor(a, c, d));
// O(n) time
// O(1) space
function firstCommonAncestorWithParent(head, node1, node2) {
  let depth1 = findDepth(node1);
  let depth2 = findDepth(node2);

  let bigDepth;
  let shortDepth;
  let deepNode;
  let shortNode;

  if(depth1 > depth2) {
    bigDepth = depth1;
    shortDepth = depth2;
    deepNode = node1;
    shortNode = node2;
  } else {
    bigDepth = depth2;
    shortDepth = depth1;
    deepNode = node2;
    shortNode = node1;
  }

  // O(n) time
  while(bigDepth > shortDepth) {
    bigDepth--;
    deepNode = deepNode.parent;
  }

  // O(n) time
  while(deepNode.parent !== shortNode.parent) {
    deepNode = deepNode.parent;
    shortNode = shortNode.parent;
  }

  return deepNode.parent;

}

// O(n) time
// O(1) space
function findDepth(head) {
  if(!head.parent) {
    return 1;
  } else {
    return 1 + findDepth(head.parent);
  }
}

console.log(firstCommonAncestorWithParent(a,c,b));
