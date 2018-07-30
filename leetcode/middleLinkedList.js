// O(n) time and O(1) space

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

function middleLinkedList(head) {
  let slowPointer = head;
  let fastPointer = head;

  while(fastPointer.next !== undefined) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
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

console.log(middleLinkedList(a));
