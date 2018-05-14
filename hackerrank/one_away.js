//solution 1
//time: O(n)
//space: O(n)

function oneAway(str1, str2) {
  if(str1.length > str2.length + 1 || str2.length > str1.length + 1) {
    return false;
  }


//check for replacement
if(str1.length == str2.length) {
  let missingCount = 0;
  let strCount1 = countChars(str1);
  let strCount2 = countChars(str2);

  let strArr1 = Object.keys(strCount1);

  for(let i = 0; i < strArr1.length; i++) {
    if(strCount2[strArr1[i]] !== strCount1[strArr1[i]]) {
      missingCount++;
    }

    if(missingCount > 1) {
      return false;
    }
  }

  return true;

}


//check for insertion and deletion
  let short;
  let long;

  if(str1.length > str2.length) {
    long = str1;
    short = str2;
  } else {
    long = str2;
    short = str1;
  }

  let shortCount = countChars(short);
  let longCount = countChars(long);

  let shortKeys = Object.keys(shortCount);

  for(let i = 0; i < shortKeys.length; i++) {
    if(!longCount[shortKeys[i]]) {
      return false;
    }
  }

  return true;







}

function countChars(str) {
  let count = { };

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if(!count[currChar]) {
      count[currChar] = 1;
    } else {
      count[currChar]++;
    }
  }

  return count;
}

console.log(oneAway("part", "bart"));
