// O(n) time and space

import java.util.*;

public class MiddleLinkedList {
  public static void main(String[] args) {
    ListNode a = new ListNode(1);
    ListNode b = new ListNode(2);
    ListNode c = new ListNode(3);
    ListNode d = new ListNode(4);
    ListNode e = new ListNode(5);
    ListNode f = new ListNode(6);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    System.out.println(findMiddleNode(a).value);
  }

  public static ListNode findMiddleNode(ListNode head) {
    ArrayList<ListNode> allNodes = getFullList(head);

    // if(allNodes.size() % 2 == 1) {
      return allNodes.get(allNodes.size() / 2);
    // } else {
      // return allNodes.get((allNodes.size() / 2) + 1);
    // }

  }

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
