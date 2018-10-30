class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time
// O(1) space
function deleteAtTail(head) {
  if(!head.next) {
    return head;
  }

  let prevNode = head;
  let nextNode = head.next;

  while(nextNode.next) {
    prevNode = prevNode.next;
    nextNode = nextNode.next;
  }

  prevNode.next = null;
  return head;
}

function printList(head) {
  let currNode = head;

  while(currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let butts = deleteAtTail(a);
printList(deleteAtTail(a));
