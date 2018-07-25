public class ReturnKthToLast {
  public static void main(String[] args) {
    ListNode test = new ListNode(1);
    ListNode test2 = new ListNode(2);

    test.setNext(test2);
    System.out.println(test.value);
    System.out.println(test.getNext().value);
  }
}
