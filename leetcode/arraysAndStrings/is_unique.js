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
// O(1) space
// O(n^2) time
function isUnique2(str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isUnique2("fod"));
