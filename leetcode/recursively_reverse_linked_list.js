// O(n) time complexity
// O(1) space complexity

class ListNode{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  if(head.next) {
    reverseList(head.next);
  }

  console.log(head.value);
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
let f = new ListNode(6);
let g = new ListNode(7);
let h = new ListNode(8);
let i = new ListNode(9);
let j = new ListNode(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;


reverseList(a);
