class RemoveDups {
  public static void main(String[] args) {
    Node head = new Node(1);
    head.appendToTail(1);
    head.appendToTail(2);
    head.appendToTail(1);
    head.appendToTail(3);
    head.appendToTail(4);
    head.appendToTail(5);
    head.appendToTail(6);
    head.appendToTail(3);

    System.out.println(removeDups(head).length);

  }

  public static int[] removeDups(Node head) {
    int[] answer = new int[head.length];
    return answer;
  }
}

class Node {
  Node next = null;
  int value;
  int length = 1;

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
    this.length++;
  }

  public void printNodes() {
    Node currentNode = this;
    while(currentNode != null) {
      System.out.println(currentNode.value);

      if(currentNode.next != null) {
        currentNode = currentNode.next;
      } else {
        break;
      }
    }
  }
}
