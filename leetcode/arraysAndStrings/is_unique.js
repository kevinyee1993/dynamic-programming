// using additional data structure
// O(n) space
// O(n) time
function isUnique(str) {
  let strArr = str.split("");
  let charCounter = {};

  for(let i = 0; i < strArr.length; i++) {
    let currChar = str[i];
    if(!charCounter[currChar]) {
      charCounter[currChar] = 1;
    } else {
      return false;
    }
  }

  return true;
}


// without using additional data structure
function isUnique2(str) {
  
}
