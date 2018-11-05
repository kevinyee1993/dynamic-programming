class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time and space
function loopDetection(head) {
  const visitedNodes = {};
  let currNode = head;

  while(currNode) {
    if(!visitedNodes[currNode.value]) {
      visitedNodes[currNode.value] = true;
    } else {
      return currNode;
    }
    currNode = currNode.next;
  }

  return null;
}

let a = new ListNode('A');
let b = new ListNode('B');
let c = new ListNode('C');
let d = new ListNode('D');
let e = new ListNode('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

console.log(loopDetection(a));
