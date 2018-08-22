class minHeap {
  constructor() {
    this.heap = [];
  }

  insertElement(el) {
    this.heap.push(el);
    this.heapifyUp();
  }

  removeMinimumElement() {
    let minEl = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    this.heapifyDown();

    return minEl;
  }

  peek() {
    return this.heap[0];
  }

  heapifyUp() {
    let newestIdx = this.heap.length - 1;
    // let newestEl = this.heap[lastIdx];
    let parentIdx = this.getParentFromIndex(newestIdx);

    // let parentEl = this.heap[parentIdx];

    while(this.heap[newestIdx] < this.heap[parentIdx]) {
      let temp = this.heap[newestIdx];
      this.heap[newestIdx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;

      newestIdx = parentIdx;
      parentIdx = this.getParentFromIndex(parentIdx);
    }


  }

  heapifyDown() {
    
  }

  getParentFromIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildFromIndex(idx) {
    return (idx * 2) + 1;
  }

  getRightChildFromIndex(idx) {
    return (idx * 2) + 2;

  }
}

let fart = new minHeap();
fart.insertElement(5);
fart.insertElement(7);
fart.insertElement(6);
fart.insertElement(2);
console.log(fart.heap);
