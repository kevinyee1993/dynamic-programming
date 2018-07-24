import java.util.*;

public class LeafSimilarTrees {
  public static void main(String[] args) {
    ArrayList<Integer> a = new ArrayList<Integer>();
    ArrayList<Integer> b = new ArrayList<Integer>();

    a.add(1);
    b.add(1);

    System.out.println(compareLeafSequences(a, b));

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


  public class TreeNode {
   int val;
   TreeNode left;
   TreeNode right;
   TreeNode(int x) { val = x; }
 }


}
