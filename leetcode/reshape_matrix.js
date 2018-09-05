function matrixReshape(nums, r, c) {
  let store = flatten(nums);
}

function flatten(nums) {
  let store = [];

  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums[0].length; j++) {
      store.push(nums[i][j]);
    }
  }

  return store;
}

let test = [[1,2,3],[4,5,6],[7,8,9]];
console.log(flatten(test));
