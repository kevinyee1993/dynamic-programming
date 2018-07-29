import java.util.*;

public class MiddleLinkedList {
  public static void main(String[] args) {
    ListNode a = new ListNode(1);
    ListNode b = new ListNode(2);
    ListNode c = new ListNode(3);
    ListNode d = new ListNode(4);
    ListNode e = new ListNode(5);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    ArrayList<ListNode> test = getFullList(a);
    System.out.println(test.size());
  }

  // public static ListNode findMiddleNode(ListNode head) {
  //   ArrayList<ListNode> allNodes = getFullList(head);
  //
  //
  // }

  public static ArrayList<ListNode> getFullList(ListNode head) {
    ArrayList<ListNode> answer = new ArrayList<ListNode>();
    ListNode currentNode = head;

    while(currentNode != null) {
      answer.add(currentNode);
      currentNode = currentNode.next;
    }

    return answer;
  }

}
