// O(n) time
// O(n) space

var isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false;
  }

  let sCount = countChars(s);
  let tCount = countChars(t);


  compareCounters(sCount, tCount);
};

function countChars(str) {
  let counter = {};

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if(counter[currChar]) {
      counter[currChar]++;
    } else {
      counter[currChar] = 1;
    }
  }

  return counter;
}

function compareCounters(counter1, counter2) {

  for(var char in counter1) {
    if(counter1[char] !== counter2[char]) {
      return false;
    }
  }
  return true;
}

// console.log(countChars("cat"));
isAnagram("cat", "tac");
