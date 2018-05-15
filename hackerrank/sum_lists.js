class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.last = head;
  }

  append(node) {
    this.last.next = node;
    this.last = node;
  }
}

let node1 = new Node(7);
let node2 = new Node(1);
let node3 = new Node(6);

let node4 = new Node(5);
let node5 = new Node(9);
let node6 = new Node(2);

let num1 = new LinkedList(node1);
num1.append(node2);
num1.append(node3);

let num2 = new LinkedList(node4);
num2.append(node5);
num2.append(node6);

//solution 1
//time: O(n) because have to go through each list once so O(2n)
//space: O(n) because creating new strings for each list so O(2n)

//time complexity may be affected if parseInt runs slower than O(n) time
//but assuming it doesn't, overall time complexity is O(n)
function sumLists() {

  let addition1 = "";
  let addition2 = "";

  let currNode = num1.head;
  while(currNode) {
    addition1 = currNode.value + addition1;
    currNode = currNode.next;
  }

  addition1 = parseInt(addition1);

  currNode = num2.head;
  while(currNode) {
    addition2 = currNode.value + addition2;
    currNode = currNode.next;
  }

  addition2 = parseInt(addition2);

  // console.log(addition1);
  // console.log(addition2);

  return addition1 + addition2;
}

console.log(sumLists());
