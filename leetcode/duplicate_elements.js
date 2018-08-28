// return ANY element that appears more than once

// O(n) time and space
function duplicateElements(arr) {
  const elementCounter = {};

  for(let i=0; i< arr.length; i++) {
    if(!elementCounter[arr[i]]) {
      elementCounter[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }

  return null;
}

let test = [3,1,2,2,5,5];
console.log(duplicateElements(test));
