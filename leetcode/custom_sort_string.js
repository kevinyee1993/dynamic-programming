// O(n) time
// O(n) space

function customSortString(S, T) {
  // returns hash with counts of each letter
  let tStringCount = getLetterCount(T);
  let answer = "";

  // O(n) time
  for(let i = 0; i < S.length; i++) {
    let currLetter = S[i];

    if(tStringCount[currLetter]) {
      let repeat = tStringCount[currLetter];
      for(let j = 0; j < repeat; j++) {
        answer+=currLetter;
      }
      tStringCount[currLetter] = 0;
    }
  }

  let newT = buildStringFromHash(tStringCount);

  return answer.concat(newT);
}

// O(n) time
// O(n) space
function getLetterCount(str) {
  let counter = {};

  for(let i = 0; i < str.length; i++) {
    let currLetter = str[i];

    if(!counter[currLetter]) {
      counter[currLetter] = 1;
    } else {
      counter[currLetter]++;
    }
  }

  return counter;
}

// O(n) time
// O(n) space
function buildStringFromHash(hash) {
  let returnStr = "";
  let keys = Object.keys(hash);

  for(let i = 0; i < keys.length; i++) {
    while(hash[keys[i]] > 0) {
      returnStr = returnStr.concat(keys[i]);
      hash[keys[i]]--;
    }
  }

  return returnStr;
}

console.log(customSortString("kqep", "pekeq"));
// let hash = getLetterCount("abcd");
// console.log(buildStringFromHash(hash));
