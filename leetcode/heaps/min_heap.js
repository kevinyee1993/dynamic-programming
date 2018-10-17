class MinHeap {
  constructor() {
    this.heap = [];
  }

  // takes element and bubbles it up in the heap until it's in the right place
  // assumes it's the last element you're heapifying up
  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);

    if(this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }

  }

  // takes the element in the priority position and bubble it down
  // until it's in the right place
  // use this with pop where you switch the priority element
  // with the very last element, pop off the last element,
  // and heapify down
  heapifyDown(index) {
    let child1;
    let child2;

    let lowestChild;

    [child1, child2] = this.getChildrenIndex(index);

    if(child1 <= child2) {
      lowestChild = child1;
    } else {
      lowestChild = child2;
    }

    if(this.heap[index] > this.heap[lowestChild]) {
      this.swap(index, lowestChild);
      this.heapifyDown(lowestChild);
    }
  }

  // shows you the priority element but doesnt pop it off
  peek() {
    return this.heap[0];
  }

  // gives you the priority element and pops it off
  pop() {
    this.swap(0, this.heap.length - 1);
    let priorityElement = this.heap.pop();
    this.heapifyDown(0);

    return priorityElement;
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getChildrenIndex(parentIndex) {
    let child1 = parentIndex * 2 + 1;
    let child2 = parentIndex * 2 + 2;

    return [child1, child2];
  }
}

let test = new MinHeap();
test.insert(2);
test.insert(1);
test.insert(199);
test.insert(1);
test.pop();
test.pop();
test.insert(1);

console.log(test.heap);
//[0,1,2,3,4,5,6]
