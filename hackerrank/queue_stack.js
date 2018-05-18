//Time complexities
//    push = O(1) because always just one step
//    pop = O(n) because worst case you have to do the transfer elements step
//    which has to go through the entire push stack transfer elements one by one
//Space complexities
//    Extra space: O(1) because not creating any new data structures
//    Overall space: O(n) because have 2 arrays we created 

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
