class RemoveDups {
  public static void main(String[] args) {

  }
}

class Node {
  Node next = null;
  int value;

  public Node(int value) {
    this.value = value;
  }

  public void appendToTail(int d) {
    Node end = new Node(d);
    Node n = this;

    while(n.next != null) {
      n = n.next;
    }

    n.next = end;
  }
}
