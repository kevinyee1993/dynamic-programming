//each node keeps track of the lowest node so far and the next lowest
//if a node is added and is the new lowest, its nextLowest becomes the current
//lowest and then the current lowest gets updated to this node's value

//when a node which is the current lowest is deleted, the current lowest
//gets updated to that node's next lowest.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.nextLowest = null;
    this.lowest = null;
  }
}

class LinkStack {
  constructor() {
    this.head = null;
    this.last = null;
    this.lowest = null;
  }

  append(node) {
    if(!this.head) {
      this.head = node;
      this.last = node;
      this.lowest = node;
    } else {
      this.last.next = node;
      this.last = node;

      if(node.value < this.lowest.value) {
        node.nextLowest = this.lowest;
        this.lowest = node;
        node.lowest = node;
      } else {
        //TODO: this right here
      }
    }
  }
}
