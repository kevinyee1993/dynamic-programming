public class MaxDepthNaryTree {
  public static void main(String[] args) {
    TreeNode a = new TreeNode(1);
    TreeNode leftB = new TreeNode(1);
    TreeNode middleB = new TreeNode(1);
    TreeNode rightB = new TreeNode(1);

    a.left = leftB;
    a.middle = middleB;
    a.right = rightB;

    TreeNode leftC = new TreeNode(1);
    leftB.left = leftC;

    System.out.println(maxDepthNaryTree(a));
  }

  public static int maxDepthNaryTree(TreeNode root) {
    if(root == null) {
      return 0;
    }

    int leftDepth = maxDepthNaryTree(root.left);
    int middleDepth = maxDepthNaryTree(root.middle);
    int rightDepth = maxDepthNaryTree(root.right);

    int bigDepth = findBiggest(leftDepth, middleDepth, rightDepth);

    return bigDepth + 1;

  }

  public static int findBiggest(int left, int middle, int right) {
    int biggest = middle;

    if(left > middle) {
      biggest = left;
    }

    if(right > middle) {
      biggest = right;
    }

    return biggest;
  }
}
