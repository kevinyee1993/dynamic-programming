class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


function minimalTree(arr) {
  if(arr.length < 1) {
    return null;
  }
  if(arr.length === 1) {
    let node = new TreeNode(arr[0]);
    return node;
  }

  let midPoint = Math.floor(arr.length / 2);

  let mid = arr[arr.length / 2];
  let midNode = new TreeNode(mid);

  let leftArr = arr.slice(0, midPoint);
  let rightArr = arr.slice(midPoint + 1, arr.length);

  midNode.left = minimalTree(leftArr);
  midNode.right = minimalTree(rightArr);

  return midNode;
}
