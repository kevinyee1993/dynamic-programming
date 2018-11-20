class LinkedList {
  constructor(root = null) {
    this.root = root;
    this.newest = this.root;
  }

  appendNode(node) {
    if(!this.root) {
      this.root = node;
      this.newest = node;
    } else {
      this.newest.next = node;
      this.newest = node;
    }
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = this.left = null;
  }
}

function listOfDepths(root) {
  const treeDepth = findDepth(root);
  const listArr = [];

  // O(n) time and O(d) space where d is the depth
  for(let i = 0; i < treeDepth; i++) {
    listArr.push(new LinkedList());
  }

  addNodeToList(listArr, root);

  return listArr;
}

function addNodeToList(listArr, node, currDepth = 0) {
  if(!node) {
    return;
  }

  listArr[currDepth].appendNode(node);

  addNodeToList(listArr, node.left, currDepth + 1);
  addNodeToList(listArr, node.right, currDepth + 1);
}

// O(1) space
// O(n) time where n is number of nodes
function findDepth(root) {
  if(!root) {
    return 0;
  }

  if(!root.left && !root.right) {
    return 1;
  }

  const leftDepth = findDepth(root.left);
  const rightDepth = findDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);

a.left = b;
a.right = c;
c.left = d;
b.right = e;

let answer = listOfDepths(a);
let test = answer[1];
let root = test.root;
let currNode = root;

while(currNode) {
  console.log(currNode.value);
  currNode = currNode.next;
}
