import java.util.*;

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


    // hashmap test
    // HashMap<Integer, Boolean> test = new HashMap<Integer, Boolean>();
    // test.put(1, true);
    // test.put(2, true);
    // test.put(3, true);
    //
    // System.out.println(test.get(4));

    removeDups(head);
    head.printNodes();

    // ArrayList practice
    // ArrayList<Integer> test = new ArrayList<Integer>();
    // test.add(1);
    // System.out.println(test.get(0));

  }

  public static void removeDups(Node head) {
    // int[] answer = new int[head.length];
    ArrayList<Integer> answer = new ArrayList<Integer>();

    HashMap<Integer, Boolean> existingNodes = new HashMap<Integer, Boolean>();
    Node currentNode = head;
    Node nodeTracker = head;

    while(currentNode != null) {
      if(existingNodes.get(currentNode.value) == null) {
        existingNodes.put(currentNode.value, true);
        answer.add(currentNode.value);

        if(currentNode != nodeTracker) {
          nodeTracker.next = currentNode;
        }

        nodeTracker = currentNode;

      }

      currentNode = currentNode.next;
    }
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
