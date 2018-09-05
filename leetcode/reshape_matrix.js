// O(n) time
// O(n) space

function matrixReshape(nums, r, c) {
  let store = flatten(nums);
  let answer = createArray(r, c);
  let counter = 0;

  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      answer[i][j] = store[counter];
      counter++;
    }
  }

  return answer;
}

function createArray(r,c) {
  let arr = new Array(r);

  for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array(c);
  }

  return arr;
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

let test = [[1,2],[4,5],[7,8]];
console.log(matrixReshape(test, 6, 1));
