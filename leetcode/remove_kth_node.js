class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time and space
function removeKthNode(head, k) {
  let nodes = [];
  let curr = head;

  while(curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  let prev = nodes[nodes.length - k - 1];
  prev.next = prev.next.next;
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
