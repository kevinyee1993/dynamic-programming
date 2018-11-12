class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function intersection(head1, head2) {
  let nodeTracker = listToHash(head2);
  let currNode = head1;
  // console.log(nodeTracker);

  while(currNode) {
    if(nodeTracker[currNode]) {
      return true;
    }

    currNode = currNode.next;
  }

  return false;
}

// TODO:
// object can't be used as key because JS turns it into
// a string called '[object Object]'
// need to find a way to accomodate
function listToHash(root) {
  const nodeTracker = {};
  let currNode = root;

  while(currNode) {
    nodeTracker[currNode] = true;
    currNode = currNode.next;
  }

  console.log(nodeTracker);
  return nodeTracker;
}

let a = new ListNode(1);
let b = new ListNode(2);

let c = new ListNode(3);
let d = new ListNode(4);

a.next = b;

c.next = d;

console.log(intersection(a,c));
