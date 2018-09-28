// time: O(nm) where each var is length of each arr
// space: O(n) where n is length of findNums

function nextGreaterElement(findNums, nums) {
  let answer = [];

  for(let i = 0; i < findNums.length; i++) {
    let currNum = findNums[i];
    let foundNum = -1;
    let startCount = false;

    for(let j = 0; j < nums.length; j++) {
      let refNum = nums[j];

      if(refNum === currNum) {
        startCount = true;
      }


      if(startCount && refNum > currNum) {
        foundNum = refNum;
        break;
      }
    }

    answer.push(foundNum);
  }

  return answer;
}

console.log(nextGreaterElement([2,4], [1,2,3,4]));
