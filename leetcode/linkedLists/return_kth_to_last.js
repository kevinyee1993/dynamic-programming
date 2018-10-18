class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time and space
function returnKthToLast(head, k) {
  let length = countList(head);
  let target = length - k;
  let count = 0;
  let currNode = head;
  let answer = [];

  while(currNode) {
    if(count >= target) {
      answer.push(currNode);
    }
    count++;
    currNode = currNode.next;
  }

  return answer;
}

// O(n) time, O(1) space
function countList(head) {
  let count = 0;
  let currNode = head;

  while(currNode) {
    count++;
    currNode = currNode.next;
  }

  return count;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

console.log(returnKthToLast(a,5));
