class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// O(n) time
function insertAtTail(head, data) {
  let lastNode = getLastNode(head);

  lastNode.next = new ListNode(data);
}

function getLastNode(head) {
  let currNode = head;

  while(currNode.next) {
    currNode = currNode.next;
  }

  return currNode;
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

insertAtTail(a, 6);
insertAtTail(a, 7);
insertAtTail(a, 8);
printList(a);
