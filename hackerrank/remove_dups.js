class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.current = head;
  }

  append(node) {
    this.current.next = node;
    this.current = node;
  }

  printList() {
    let track = this.head;

    while(track) {
      console.log(track);
      track = track.next;
    }
  }
}

let node1 = new Node("a");
let node9 = new Node("c");
let node2 = new Node("e");
let node3 = new Node("c");
let node4 = new Node("d");
let node5 = new Node("b");
let node6 = new Node("e");
let node7 = new Node("a");
let node8 = new Node("b");

let list = new LinkedList(node1);
list.append(node9);
list.append(node2);
list.append(node3);
list.append(node4);
list.append(node5);
list.append(node6);
list.append(node7);
list.append(node8);



//solution 1
//time: O(n) because have to go through each element in the linked list once
//space: O(n) because creating seenNodes hash
function removeDups(linkedList) {
  let currNode = list.head;
  let seenNodes = { };

  let prevNode = null;

  while(currNode) {

    if(!seenNodes[currNode.value]) {
      seenNodes[currNode.value] = true;
      prevNode = currNode;
      currNode = currNode.next;
    } else {
      prevNode.next = currNode.next;
      currNode = currNode.next;
    }
  }
}

removeDups(list);
list.printList();
//
// let currNode = list.head;
//
// while(currNode) {
//   console.log(currNode.value);
//   currNode = currNode.next;
// }





//just testing out nodes
// let headNode = new Node("headnode");
// let list = new LinkedList(headNode);
//
// console.log(list.head);
// console.log(list.current);
//
// let newNode = new Node("newNode");
// list.append(newNode);
//
// console.log(headNode.next);
// console.log(list.head);
// console.log(list.current);
