class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time and space
function partition(head, value) {
  const smallerValues = [];
  const biggerValues = [];
  let currNode = head;

  while(currNode) {
    if(currNode.value < value) {
      smallerValues.push(currNode);
    } else {
      biggerValues.push(currNode);
    }

    currNode = currNode.next;
  }

  const combinedValues = smallerValues.concat(biggerValues);

  for(let i = 0; i < combinedValues.length; i++) {
    let curr = combinedValues[i];
    let next = combinedValues[i + 1];

    curr.next = next;
  }

  return head;
}

function printList(head) {
  let currNode = head;

  while(currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

let a = new ListNode(3);
let b = new ListNode(5);
let c = new ListNode(8);
let d = new ListNode(5);
let e = new ListNode(10);
let f = new ListNode(2);
let g = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

// printList(a);
partition(a, 5);
printList(a);
