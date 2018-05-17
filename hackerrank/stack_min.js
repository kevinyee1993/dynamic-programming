//each node keeps track of the lowest node so far and the next lowest
//if a node is added and is the new lowest, its nextLowest becomes the current
//lowest and then the current lowest gets updated to this node's value

//when a node which is the current lowest is deleted, the current lowest
//gets updated to that node's next lowest.

//TODO: only problem is removing the last node which isn't working exactly like how
//I planned

//time of insertion: O(1)
//time of deletion: O(1)
//time of getting min: O(1)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;

    this.nextLowest = null;
    this.lowest = null;
  }
}

class LinkStack {
  constructor() {
    this.head = null;
    this.last = null;
    this.lowest = null;
  }

  append(node) {
    if(!this.head) {
      this.head = node;
      this.last = node;
      this.lowest = node;

      //first node has itself as the lowest but doesn't have a next lowest
      node.lowest = node;
    } else {

      //appends the node to the end of the list
      this.last.next = node;
      node.prev = this.last;
      this.last = node;

      //checks for lowest value and updates accordingly
      if(node.value < this.lowest.value) {
        node.nextLowest = this.lowest;
        node.lowest = node;
        this.lowest = node;
      } else {
        node.lowest = node.prev.lowest;
        if(!node.prev.nextLowest) {
          node.nextLowest = node;
        } else {
          node.nextLowest = node.prev.nextLowest;
        }
      }
    }
  }

  //going to make this a doubly linked list for now, will have to
  //solve pop diffrently for a singly linked list
  pop() {
    //don't do anything if stack is empty
    if(this.isEmpty()) {
      return false;
    }

    if(this.last === this.head) {
      this.head = null;
      this.last = null;
      return true;
    }

    //if popping off the lowest, just setting the current lowest to the
    //lowest value's next lowest value
    if(this.last.value === this.lowest.value) {
      this.lowest = this.last.nextLowest;
    }

    //removing the node
    //need to account for if the last value is the head
    if(this.last.prev) {
      this.last.prev.next = null;
    }
    this.last = this.last.prev;
  }

  isEmpty() {
    if(!this.last) {
      return true;
    }

    return false;
  }

  min() {
    return this.lowest;
  }
}

let test = new LinkStack();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

test.append(node3);
test.append(node2);
test.append(node1);

console.log(test.min());

test.pop();
console.log(test.min());

test.pop();
console.log(test.min());

test.pop();
console.log(test.min());

test.pop();
console.log(test.head);
test.pop();
console.log(test.head);
// console.log(test.lowest.value);
