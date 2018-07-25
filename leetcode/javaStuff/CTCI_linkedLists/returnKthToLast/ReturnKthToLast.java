import java.util.*;

public class ReturnKthToLast {
  public static void main(String[] args) {
    ListNode test = new ListNode(1);
    ListNode test2 = new ListNode(2);

    test.setNext(test2);

    ArrayList<ListNode> butt = createListFromHead(test);

    for(int i = 0; i < butt.size(); i++) {
      System.out.println(butt.get(i).value);
    }
  }

  // public static ListNode returnKthToLast(int n, ListNode head) {
  //   ArrayList<ListNode> allNodes = createListFromHead(head);
  //   // 0th from last is last one
  //   // 1st to last is second to last etc.
  // }

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
