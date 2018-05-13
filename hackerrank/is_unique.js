//solving this problem using an additional data structure
//solution is O(n) time because have to go through each char of the string
//O(n) space because creating a new hash to keep track of the count
function isUnique(str) {
  let charCounter = { };

  for(let i = 0; i < str.length; i++) {
    if(!charCounter[str[i]]) {
      charCounter[str[i]] = 1;
    } else {
      charCounter[str[i]]++;
    }

    if(charCounter[str[i]] > 1) {
      return false;
    }
  }

  return true;
}

//solving this problem with no additional data structures

//first solution
//O(n^2) time because there's a nested loop going through each char of the str
//and comparing it with the rest of the chars in the str
//O(1) space because not using any additional data structures

//bottleneck is the nested loop, if had to optimize would work on that
function isUnique2(str) {
  for(let i = 0; i < str.length - 1; i++) {
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

//second solution
//time: O(nlogn) because having to sort the string
//space: O(1) because not creating any new data structure

function isUnique3(str) {
  let sortedStr = str.split("").sort().join("");

  for(let i = 0; i < sortedStr.length - 1; i++) {
    if(sortedStr[i] === sortedStr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(isUnique3("hello"));
console.log(isUnique3("heelo"));
console.log(isUnique3("heo"));
console.log(isUnique3("hhelo"));
