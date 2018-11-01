// O(n) time and space
function singleNumber(arr) {
  const numCounter = {};

  arr.forEach(num => {
    if(!numCounter[num]) {
      numCounter[num] = 1;
    } else {
      numCounter[num]++;
    }
  });

  const counts = Object.keys(numCounter);
  for(let i = 0; i < counts.length; i++) {
    if(numCounter[i] === 1) {
      return i;
    }
  }
}

const arr = [1,1,2,2,3,3,4,5,5,6,6];
console.log(singleNumber(arr));
