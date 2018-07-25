public class ListNode {
  int value;

  private ListNode nextNode;

  public ListNode(int value) {
    this.value = value;
  }

  public void setNext(ListNode nextNode) {
    this.nextNode = nextNode;
  }

  public ListNode getNext() {
    return this.nextNode;
  }
}
