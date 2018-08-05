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

  // all left values add new root value
  // all right values go through the same process

  // wait left doesn't just add the top node but it also needs to
  // add all of its rights

  // what if first you convert all nodes normally using recursion
  // then at the end go through the tree again and just add the
  // root node value to each of its' lefts

  public void convertBSTtoGreaterTree(TreeNode root) {
    if(root == null) {
      return;
    }

    // this is a stupid slow step actually
    // can optimze this because you are doing a O(n) operation
    // each stack frame but whatever man just get this done first
    if(root.right != null) {
      root.value += sumAllNodeValues(root.right);
    }

    // this is exponential step too because each stack frame is
    // calling two more stack frames..!!!!
    convertBSTtoGreaterTree(root.left);
    convertBSTtoGreaterTree(root.right);


  }

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
