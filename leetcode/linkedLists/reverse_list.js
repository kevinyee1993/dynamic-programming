class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  let next = head.next;

  while(curr) {
    curr.next = prev;
    prev = curr;
    curr = next;

    if(next) {
      next = next.next;
    }
  }

  return prev;
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

printList(a);
let butt = reverseList(a);
printList(butt);
