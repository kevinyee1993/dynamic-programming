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

let node1 = new Node(1);
let node2 = new Node(1);
let node3 = new Node(2);
let node4 = new Node(1);

let list = new LinkedList(node1);
list.append(node2);
list.append(node3);
list.append(node4);


//solution 1
//time: O(n) because going through the entire linked list and then going through
//half of the array that comes from it separately
//space: O(n) because creating a new array to store the values
const palindrome = (linkedList) => {
  let values = [];

  let currNode = linkedList.head;

  while(currNode) {
    values.push(currNode.value);
    currNode = currNode.next;
  }

  return arrayPalindromeCheck(values);

};

const arrayPalindromeCheck = (arr) => {
  for(let i = 0; i < arr.length / 2; i++) {
    let currIdx = i;
    let laterIdx = arr.length - 1 - i;

    if(arr[currIdx] !== arr[laterIdx]) {
      return false;
    }
  }

  return true;
};

console.log(palindrome(list));
