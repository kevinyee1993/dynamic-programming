// O(n) time and O(1) space

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(root, target) {

  // handles case if first node is already the target
  if(root.value === target) {
    return root.next;
  }

  let currNode = root.next;
  let prevNode = root;

  while(currNode) {
    if(currNode.value === target) {
      prevNode.next = currNode.next;
      break;
    }

    currNode = currNode.next;
    prevNode = prevNode.next;
  }

  return root;
}

function printList(root) {
  let currNode = root;

  while(currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

printList(a);
