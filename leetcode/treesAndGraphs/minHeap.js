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

    this.heapifyDown(0);

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

  heapifyDown(currElIdx) {
    let minEl = this.heap[currElIdx];
    let leftIdx = this.getLeftChildFromIndex(currElIdx);
    let rightIdx = this.getRightChildFromIndex(currElIdx);

    let smallBoy;
    let bigBoy;


    if(this.heap[currElIdx] <= this.heap[smallBoy] && this.heap[currElIdx] <= this.heap[bigBoy]) {
      return;
    }

    if(this.heap[leftIdx] < this.heap[rightIdx]) {
      smallBoy = leftIdx;
      bigBoy = rightIdx;
    } else {
      smallBoy = rightIdx;
      bigBoy = leftIdx;
    }

    if(this.heap[currElIdx] > this.heap[smallBoy]) {
      let temp = this.heap[currElIdx];
      this.heap[currElIdx] = this.heap[smallBoy];
      this.heap[smallBoy] = temp;

      this.heapifyDown(smallBoy);
      return;
    }  else if(this.heap[currElIdx] > this.heap[bigBoy]){
      let temp = this.heap[currElIdx];
      this.heap[currElIdx] = this.heap[bigBoy];
      this.heap[bigBoy] = temp;

      this.heapifyDown(bigBoy);
      return;
    }


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

fart.removeMinimumElement();
console.log(fart.heap);

fart.insertElement(1);
fart.insertElement(4);
fart.insertElement(100);
console.log(fart.heap);

fart.removeMinimumElement();
console.log(fart.heap);
