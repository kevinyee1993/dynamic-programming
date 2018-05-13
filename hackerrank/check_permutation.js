//solution 1
//time: O(n) because looping through each char of each string to count
//space: O(n) because creating 2 new hash counters

function checkPermutation1(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }


  let strCount1 = countStrChars(str1);
  let strCount2 = countStrChars(str2);

  for(let i = 0; i < str1; i++) {
    if(strCount1[str1[i]] !== strCount2[str1[i]]) {
      return false;
    }
  }

  return true;
}

function countStrChars(str) {
  let counter = { };

  for(let i = 0; i < str.length; i++) {
    if(!counter[str[i]]) {
      counter[str[i]] = 0;
    } else {
      counter[str[i]]++;
    }
  }

  return counter;
}



//solution 2
//time: O(nlog(n)) because have to sort each of the strings
//space: O(1) because don't have to create any additional data structures
function checkPermutation2(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(checkPermutation2("hello", "olleh"));
console.log(checkPermutation2("hello", "olhle"));
console.log(checkPermutation2("hello", "olhe"));
console.log(checkPermutation2("rocho", "chonor"));
