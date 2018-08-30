function findDuplicates(nums) {
  let answer = [];
  let counter = {};

  for(let i = 0; i < nums.length; i++) {
    let currNum = nums[i];

    if(!counter[currNum]) {
      counter[currNum] = 1;
    } else {
      answer.push(currNum);
    }
  }

  return answer;
}
