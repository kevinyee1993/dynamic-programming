// O(n) time and O(1) space

function findMaxConsecutiveOnes(nums) {
  let maxOneCounter = 0;
  let currentOneCounter = 0;
  let prevOne = false;

  nums.forEach( num => {
    if(num === 1 && prevOne) {
      currentOneCounter++;
      prevOne = true;
    } else if(num === 1 && !prevOne) {
      currentOneCounter = 1;
      prevOne = true;
    } else if(num !== 1) {
      currentOneCounter = 0;
      prevOne = false;
    }

    if(currentOneCounter > maxOneCounter) {
      maxOneCounter = currentOneCounter;
    }
  });

  return maxOneCounter;
}
let test = [1,1,1,0,1,1];
console.log(findMaxConsecutiveOnes(test));
