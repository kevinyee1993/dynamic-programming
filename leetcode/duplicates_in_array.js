// O(n) time and O(n) space
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

// time: O(n)
// space: O(1) excluding the array created to store the answer
// function findDuplicates2(nums) {
//   let answer = [];
//
//   for(let i = 0; i < nums.length; i++) {
//     let currNum = nums[i];
//
//     if(currNum < 0) {
//       answer.push(i);
//     } else {
//       nums[currNum] *= -1;
//     }
//   }
//
//   return answer;
// }

// console.log(findDuplicates2([4,3,2,7,8,2,3,1]));
