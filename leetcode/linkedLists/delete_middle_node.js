class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// O(n) time
// O(1) space
function deleteMiddleNode(head, target) {
  let currNode = head.next;
  let prevNode = head;

  while(currNode) {
    if(currNode.value === target) {
      prevNode.next = currNode.next;
      break;
    } else {
      currNode = currNode.next;
      prevNode = prevNode.next;
    }

  }
}

function traverseList(head) {
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

deleteMiddleNode(a, 3);
traverseList(a);
