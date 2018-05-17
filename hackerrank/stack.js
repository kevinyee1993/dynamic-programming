//practicing implementing a stack with arrays
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    if(this.stack.length === 0) {
      return true;
    }

    return false;
  }
}

//practice creating stack using linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class linkedStack {
  constructor() {
    this.head = null;
  }

  push(node) {
    if(!this.head) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      node.previous = this.last;
      this.last = node;
    }
  }

  pop() {
    if(this.last === this.head) {
      this.head = null;
      this.last = null;
    } else {
      this.last.previous.next = null;
      this.last = this.last.previous;
    }
  }

  peek() {
    return this.last.value;
  }

  isEmpty() {
    if(this.head === null) {
      return true;
    }
    return false;
  }
}

let node1 = new Node("a");
let node2 = new Node("b");
let node3 = new Node("c");

let list = new linkedStack();

list.push(node1);
list.push(node2);
list.push(node3);

// console.log(list);

while(!list.isEmpty()) {
  console.log(list.peek());
  list.pop();
}
