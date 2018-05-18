class QueueStack {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(el) {
    this.pushStack.push(el);
  }

  pop() {
    if(this.popStack.length > 0) {
      return this.popStack.pop();
    } else {
      this.transferElements();
      return this.popStack.pop();
    }
  }

  transferElements() {
    while(this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }
}


let test = new QueueStack();
test.push(1);
test.push(2);
test.push(3);

console.log(test.pop());

test.push(4);
test.push(5);

console.log(test.pop());
console.log(test.pop());

console.log(test.pop());
console.log(test.pop());
