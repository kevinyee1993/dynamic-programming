import java.util.*;

public class LeafSimilarTrees {
  public static void main(String[] args) {
    // ArrayList<Integer> a = new ArrayList<Integer>();
    // ArrayList<Integer> b = new ArrayList<Integer>();

    // a.add(1);
    // b.add(1);

    // way to combine ArrayLists
    // a.addAll(b);
    TreeNode a = new TreeNode(1);
    a.left = new TreeNode(2);
    a.right = new TreeNode(3);
    a.right.right = new TreeNode(4);

    System.out.println(getLeafSequence(a));
    // System.out.println(compareLeafSequences(a, b));

  }
  //
  // public static boolean isLeafSimilar(head1, head2) {
  //   ArrayList<Integer> leafSequence1 = getLeafSequence(head1);
  //   ArrayList<Integer> leafSequence2 = getLeafSequence(head2);
  //   return compareLeafSequences(leafSequence1, leafSequence2);
  // }


  // O(n) time
  public static boolean compareLeafSequences(ArrayList<Integer> seq1, ArrayList<Integer> seq2) {
    if(seq1.size() != seq2.size()) {
      return false;
    }

    for(int i = 0; i < seq1.size(); i++) {
      if(seq1.get(i) != seq2.get(i)) {
        return false;
      }
    }

    return true;
  }

  public static ArrayList<Integer> getLeafSequence(TreeNode head) {
    ArrayList<Integer> list = new ArrayList<Integer>();

    ArrayList<Integer> leftList = new ArrayList<Integer>();
    ArrayList<Integer> rightList = new ArrayList<Integer>();

    // base case
    if(head.left == null && head.right == null) {
      list.add(head.val);
      return list;
    }

    if(head.left != null) {
      leftList = getLeafSequence(head.left);
    }

    if(head.right != null) {
      rightList = getLeafSequence(head.right);
    }

    leftList.addAll(rightList);

    return leftList;
  }


  public static class TreeNode {
   int val;
   TreeNode left;
   TreeNode right;
   TreeNode(int x) { val = x; }
 }


}
