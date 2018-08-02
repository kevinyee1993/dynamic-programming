public class MaxDepthNaryTree {
  public static void main(String[] args) {
    System.out.println(findBiggest(4,3,2));
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

    if(left >= middle) {
      biggest = left;
    }

    if(right >= middle) {
      biggest = right;
    }

    return biggest;
  }
}
