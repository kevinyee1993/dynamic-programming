class test {

  public static void main(String args[]) {

    // tuna2na butts = new tuna2na();
    // butts.simpleMessage("inheritance test");
  }

  public static boolean isHappy(int n) {
    if(n == 1) {
      return true;
    } else if(Math.pow(n, 2) < 10) {
      return false;
    }

    int newNum = convertNToSquareSum(n);

    return isHappy(newNum);
  }

  public static int convertNToSquareSum(int n) {
    int sum = 0;
    int lastDigit;

    while(n > 0) {
      lastDigit = n % 10;
      n /= 10;

      sum += Math.pow(lastDigit, 2);
    }

    return sum;
  }
}


/*

Reverse singly linked list
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode previousNode = null;
        ListNode currentNode = head;

        while(currentNode != null) {
            ListNode nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        return previousNode;
    }


}
*/
