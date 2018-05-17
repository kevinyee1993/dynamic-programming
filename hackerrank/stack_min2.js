class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedStack {
  constructor() {
    this.minStack = new MinStack();
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
