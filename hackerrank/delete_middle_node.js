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

let headNode = new Node(1);
let list = new LinkedList(headNode);

let node1 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(4);
let node4 = new Node(5);
let node5 = new Node(6);
let node6 = new Node(7);
let node7 = new Node(8);
let node8 = new Node(9);

list.append(node1);
list.append(node2);
list.append(node3);
list.append(node4);
list.append(node5);
list.append(node6);
list.append(node7);
list.append(node8);

//time: O(1) because just doing one step no matter what
//space: O(1) because not creating any new data structures
function deleteMiddleNode(node) {
  let nextNode = node.next;

  node.next = nextNode.next;
  node.value = nextNode.value;

  nextNode.next = null;
}

deleteMiddleNode(node2);



let currNode = list.head;

while(currNode) {
  console.log(currNode.value);
  currNode = currNode.next;
}
