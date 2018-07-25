import java.util.*;

public class ReturnKthToLast {
  public static void main(String[] args) {
    ListNode test = new ListNode(1);
    ListNode test2 = new ListNode(2);
    ListNode test3 = new ListNode(3);
    ListNode test4 = new ListNode(4);
    ListNode test5 = new ListNode(5);

    test.setNext(test2);
    test2.setNext(test3);
    test3.setNext(test4);
    test4.setNext(test5);

    System.out.println(returnKthToLast(4, test).value);
  }

  public static ListNode returnKthToLast(int n, ListNode head) {
    ArrayList<ListNode> allNodes = createListFromHead(head);

    // just O(1) lookup time
    int targetNode = allNodes.size() - 1 - n;

    return allNodes.get(targetNode);
  }


  // O(n) time and space
  public static ArrayList<ListNode> createListFromHead(ListNode head) {
    ArrayList<ListNode> nodeList = new ArrayList<ListNode>();
    ListNode currentNode = head;

    while(currentNode != null) {
      nodeList.add(currentNode);
      currentNode = currentNode.getNext();
    }

    return nodeList;
  }
}
