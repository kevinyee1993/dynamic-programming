class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// O(n) time and space
function removeDups(head) {
  let dupHash = findDups(head);
  let currNode = head.next;
  let prevNode = head;

  while(currNode) {
    if(dupHash[currNode.value] > 1) {
      prevNode.next = currNode.next;
      dupHash[currNode.value]--;
    } else {
      prevNode = currNode;
    }

    currNode = currNode.next;
  }
}

function findDups(head) {
  let counter = {};
  let currNode = head;

  while(currNode) {
    if(!counter[currNode.value]) {
      counter[currNode.value] = 1;
    } else {
      counter[currNode.value]++;
    }

    currNode = currNode.next;
  }

  return counter;
}

function traverseList(head) {
  let currNode = head;

  while(currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }

  console.log("end");
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(1);
let e = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

traverseList(a);
removeDups(a);
traverseList(a);
