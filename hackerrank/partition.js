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
    //checks to see if there is a head already there, if not create a new head
    if(!this.head) {
      this.head = node;
      this.last = this.head;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }
}

let headNode = new Node(3);
let list = new LinkedList(headNode);

let node1 = new Node(5);
let node2 = new Node(8);
let node3 = new Node(5);
let node4 = new Node(10);
let node5 = new Node(2);
let node6 = new Node(1);

list.append(node1);
list.append(node2);
list.append(node3);
list.append(node4);
list.append(node5);
list.append(node6);

function partition(value) {
  let smallList = new LinkedList();
  let bigList = new LinkedList();

  let currNode = list.head;

  while(currNode) {
    // console.log(currNode.value);
    if(currNode.value < value) {
      smallList.append(currNode);
    } else if(currNode.value >= value) {
      bigList.append(currNode);
    }
    currNode = currNode.next;
  }

  //need to reset it otherwise it keeps the next from the node before
  bigList.last.next = null;

  // console.log(bigList.last.next);

  //combines last node of small list with first node of big list
  smallList.last.next = bigList.head;

  currNode = smallList.head;

  // console.log(bigList.last.next);
  while(currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }

}


partition(5);
