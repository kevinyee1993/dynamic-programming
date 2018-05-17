//array of stacks

//keep track of the current stack

//when that stack's length becomes too high, create a new stack in the
//array and append the node onto that stack

//when popping from the stacks, when get to a point where the current
//stack becomes empty, switch current stacks to the previous one


//time: push = O(1), pop = O(1)
//because as the number of plates go up, so do the number of new plate stacks
class StackPlates {
  constructor(maxPlates) {
    this.plateStore = [];
    this.maxPlates = maxPlates;
    this.currentStackIdx = null;
  }

  push(plate) {
    if(this.currentStackIdx === null) {
      let newStack = [];
      newStack.push(plate);
      this.currentStackIdx = 0;
      this.plateStore[this.currentStackIdx] = newStack;
    } else if(this.plateStore[this.currentStackIdx].length < this.maxPlates) {
      this.plateStore[this.currentStackIdx].push(plate);
    } else {
      let newStack = [];
      newStack.push(plate);
      this.currentStackIdx++;
      this.plateStore[this.currentStackIdx] = newStack;
    }
  }

  pop() {
    if(this.plateStore[this.currentStackIdx].length > 0) {
      this.plateStore[this.currentStackIdx].pop();
    } else{
      this.currentStackIdx--;

      // while(this.plateStore[this.currentStackIdx - 1].length === 0) {
      //   this.currentStackIdx--;
      // }

      // this.plateStore[this.currentStackIdx].pop();
      this.pop();
    }
  }

  popAt(idx) {
    this.plateStore[idx].pop();
  }


}

let test = new StackPlates(3);
test.push(1);
test.push(1);
test.push(1);
test.push(1);
test.push(1);
test.push(1);
test.push(1);
test.push(1);
console.log(test.plateStore);

test.pop();
test.pop();
test.pop();

test.push(1);
test.push(1);

test.popAt(1);
test.popAt(1);
test.popAt(1);

test.pop();
test.pop();

//need to fix this pop where the not current stack is empty before we get to it
test.pop();
console.log(test.plateStore);
