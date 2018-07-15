public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  public TreeNode(int value) {
    val = value;
  }
}

public class MergeTrees {
  public static void main(String[] args) {

  }

  public static TreeNode solution(TreeNode t1, TreeNode t2) {
    if(t1 == null && t2 == null) {
      return null;
    } else if (t1 == null) {
      return t2;
    } else if(t2 == null) {
      return t1;
    }

    int combinedVal = t1.val + t2.val;
    TreeNode newNode = new TreeNode(combinedVal);

    newNode.left = solution(t1.left, t2.left);
    newNode.right = solution(t1.right, t2.right);

    return newNode;
  }

}
