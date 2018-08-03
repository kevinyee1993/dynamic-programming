// O(n) time and space
function disappearedArray(nums) {
  let answers = [];
  let numTrack = {};

  for(let i = 1; i <= nums.length; i++) {
    numTrack[i] = false;
  }

  nums.forEach(el => {
    numTrack[el] = true;
  });

  Object.keys(numTrack).forEach(el => {
    if(!numTrack[el]) {
      answers.push(parseInt(el));
    }
  });

  return answers;

}

let nums = [4,3,2,7,8,2,3,1];
console.log(disappearedArray(nums));
