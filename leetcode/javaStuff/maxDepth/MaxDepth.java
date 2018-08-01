public class MaxDepth {
  public static void main(String[] args) {
    TreeNode a = new TreeNode(1);
    TreeNode b = new TreeNode(1);
    TreeNode c = new TreeNode(1);
    TreeNode d = new TreeNode(1);
    TreeNode e = new TreeNode(1);
    TreeNode f = new TreeNode(1);
    TreeNode g = new TreeNode(1);

    a.left = b;
    b.left = c;

    a.right = d;
    d.right = e;
    e.left = f;
    g.right = g;


    int depth = maxDepth(a);
    System.out.println(depth);
  }

  public static int maxDepth(TreeNode head) {
    if(head == null) {
      return 0;
    }

    int leftDepth = maxDepth(head.left);
    int rightDepth = maxDepth(head.right);
    int bigDepth;

    if(leftDepth > rightDepth) {
      bigDepth = leftDepth;
    } else {
      bigDepth = rightDepth;
    }

    return 1 + bigDepth;
  }
}
