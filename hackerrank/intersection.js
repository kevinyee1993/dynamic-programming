class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.last = this.head;
  }

  append(node) {
    if(!this.head) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

let node4 = new Node(1);
let node5 = new Node(2);

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();

linkedList1.append(node1);
linkedList1.append(node2);
linkedList1.append(node3);

linkedList2.append(node4);
// linkedList2.append(node3);
linkedList2.append(node5);


//solution 1
//time: O(n + m) because have to go through each linkedlist which could be diff lengths
//space: O(n + m) because have to create different sized arrays for each array
//bascially time and space would be linear

//alternative solution would be O(nm) time and O(1) space which includes
//just doing a nested loop through the linkedlist trying to find the first
//one that matches among both linkedlists
function intersection(list1, list2) {
  let array1 = listToArr(list1);
  let array2 = listToArr(list2);

  let target;

  for(let i = 0; i < array1.length; i++) {
    let arrTarget1 = array1[array1.length - 1 - i];
    let arrTarget2 = array2[array2.length - 1 - i];

    if(arrTarget1 === arrTarget2) {
      target = arrTarget1;
    } else {
      return target;
    }
  }
}

function listToArr(linkedList) {
  let array = [];

  let currNode = linkedList.head;

  while(currNode) {
    array.push(currNode);
    currNode = currNode.next;
  }

  return array;
}

console.log(intersection(linkedList1, linkedList2));
