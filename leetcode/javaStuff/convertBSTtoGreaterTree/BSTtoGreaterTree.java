public class BSTtoGreaterTree {
  public static void main(String[] args) {
    TreeNode a = new TreeNode(5);
    TreeNode b = new TreeNode(2);
    TreeNode c = new TreeNode(13);
    TreeNode d = new TreeNode(5);


    a.left = b;
    a.right = c;
    c.right = d;

    int test = sumAllNodeValues(a);
    System.out.println(test);

  }


  // nvm need to start from the top because the updated
  // value of the top will also affect the newer values

  // note in BST, greater elements are on the right so you wanna
  // just use all of those

  // wait if you start with the head, that value that it becomes
  // will essentially be the sum of all greater values than
  // the node you're looking at

  // public void convertBSTtoGreaterTree(TreeNode root) {
  //
  // }

  // call this not on the root bc would make the recursion weird
  // but call it using the target node's right node as the param
  // and just sum all them boiz up
  public static int sumAllNodeValues(TreeNode root) {

    if(root == null) {
      return 0;
    }

    if(root.left == null && root.right == null) {
      return root.value;
    }

    int leftValue = sumAllNodeValues(root.left);
    int rightValue = sumAllNodeValues(root.right);

    return root.value + leftValue + rightValue;
  }

}
