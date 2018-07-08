// O(n) time complexity
// O(n) space complexity

let containsDuplicates = (nums) => {
  let tracker = {};

  for(let i = 0; i < nums.length; i++) {
    if(tracker[nums[i]] === undefined) {
      tracker[nums[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicates([1,2,3,4,5,1]));
