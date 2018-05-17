//different way of doing stack_min
//correct way to do if you can't modify the node
//just create a new stack that keeps track of the lowest values
//and only updates when a new lowest value is appended

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedStack {
  constructor() {
    this.minStack = new MinStack();
    this.head = null;
    this.last = null;
    this.prev = null;
  }

  append(node) {
    if(!this.head) {
      this.head = node;
      this.last = node;
    } else {
      node.prev = this.last;
      this.last.next = node;
      this.last = node;
    }

    this.minStack.append(node);
  }

  pop() {
    //pops from min stack if this node is the lowest value
    if(this.last === this.minStack.min) {
      this.minStack.pop();
    }

    if(this.last.prev) {
      this.last.prev.next = null;
      this.last = this.last.prev;
    } else {
      this.head = null;
    }
  }

  min() {
    return this.minStack.min;
  }


}

class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
    this.head = null;
  }

  append(node) {
    if(!this.head) {
      this.head = node;
      this.min = node;
      this.stack.push(node);
    } else {
      if(node.value < this.min.value) {
        this.stack.push(node);
        this.min = node;
      }
    }
  }

  pop() {
    this.stack.pop();
    this.min = this.stack[this.stack.length - 1];
  }
}

let a = new LinkedStack();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

a.append(node4);
a.append(node3);
a.append(node2);
a.append(node1);


a.pop();
console.log(a.min());
a.pop();
console.log(a.min());
a.pop();
console.log(a.min());
a.pop();
console.log(a.min());
