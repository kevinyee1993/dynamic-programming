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

//solution 1
//time: O(n) actually O(2n) because going through the linked list twice
//space: O(1) because not creating any new data structures
function kthToLast1(k) {
  let length = 0;

  let currNode = list.head;

  while(currNode) {
    length++;
    currNode = currNode.next;
  }

  let elNum = length - k;

  if(elNum <= 0) {
    return null;
  }

  currNode = list.head;

  for(let i = 1; i < elNum; i++) {
    currNode = currNode.next;
  }

  return currNode.value;
}

// console.log(kthToLast1(9));


//solution 2
//time: O(n) actually O(n) instead of O(2n) so slight optimization
//space: O(n)
function kthToLast2(k) {
  let allNodes = [];

  let currNode = list.head;

  while(currNode) {
    allNodes.push(currNode.value);
    currNode = currNode.next;
  }

  return allNodes[allNodes.length - 1 - k];
}

console.log(kthToLast2(9));
