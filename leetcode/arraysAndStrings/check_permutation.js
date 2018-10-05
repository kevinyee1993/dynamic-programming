// O(n) time and space
function checkPermutation(str1, str2) {
  const countStr1 = countChars(str1);
  const countStr2 = countChars(str2);

  return compareCounts(countStr1, countStr2);
}


// O(n) space
// O(n) time
function countChars(str) {
  const counter = {};

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if(!counter[currChar]) {
      counter[currChar] = 1;
    } else {
      counter[currChar]++;
    }
  }

  return counter;
}


// O(n) space
// O(n) time
function compareCounts(countStr1, countStr2) {
  const keys1 = Object.keys(countStr1);
  const keys2 = Object.keys(countStr2);

  if(keys1.length !== keys2.length) {
    return false;
  }

  for(let i = 0; i < keys1.length; i++) {
    let currKey = keys1[i];
    if(countStr1[currKey] !== countStr2[currKey]) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutation("fart", "srtf"));
