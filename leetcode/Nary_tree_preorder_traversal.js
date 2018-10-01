// class TreeNode {
//   constructor(value) {
//     this.value = value;
//   }
// }

// assuming we have the TreeNode class already set up
// not sure how to set it up when it can be any number of nodes
function preorderTraversal(head) {
  // assuming head has a function called getChildren() which returns all the children
  if(!head) {
    return;
  }

  console.log(head.value);
  let children = head.getChildren();

  for(let i = 0; i < children.length; i++) {
    preorderTraversal(children[i]);
  }
}

// solution could be something like that
// time complexity would be O(n) where n is the number of nodes
// space complexity: O(n) where n is the number of recursive stacks
// which is directly related to the number of nodes
