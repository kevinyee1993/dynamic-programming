class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time - more specifically in just one pass
// O(1) space
function findMiddleNode(head) {
  let slowPointer = head;
  let fastPointer = head;

  while(validNextStep(fastPointer)) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}

function validNextStep(fastPointer) {
  if(!fastPointer.next) {
    return false;
  }

  if(!fastPointer.next.next) {
    return false;
  }

  return true;
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

console.log(findMiddleNode(a));
