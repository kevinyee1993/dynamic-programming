class minHeap {
  constructor() {
    this.heap = [];
  }

  insertElement(el) {
    this.heap.push(el);
    this.heapifyUp();
  }

  removeMinimumElement() {

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
}

let fart = new minHeap();
console.log(fart.getParentFromIndex(4));
