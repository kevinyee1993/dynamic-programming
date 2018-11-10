class treeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// O(n) time
// O(n) space
function inorderTraversal(root) {
  if(!root) {
    return [];
  }

  const output = [root.value];

  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);

  return left.concat(output).concat(right);
}

let a = new treeNode(1);
let b = new treeNode(2);
let c = new treeNode(3);

a.right = b;
b.left = c;

console.log(inorderTraversal(a));

/*
Your school has provided you with a budget for purchasing math notebooks
that your students will need

there are several stores that sell bundles.  You need to purchase
as many notebooks as you can fit within your budget.

For example if you had $50 and bundles of 20 notebooks each cost
$12, you can buy 4 bundles for $48.  You have 2 left over and purchased
80 notebooks.

create a function called budgetShopping which takes 3 parameters
first is n which is the amount of money you have
second is bundleQuantities which is an array of the amount of bundles
available
the third is bundleCosts which is an array of the costs of each bundle

e.g. n = 50
bundleQuantities = [20,10,30]
bundleCosts = [12, 10, 30]

result should be 80 notebooks
*/
