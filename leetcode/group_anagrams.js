function groupAnagrams(strs) {
  let anagramHash = {};
  let strArr;

  strs.forEach(str => {
    strArr = str.split("").sort();
    if(!anagramHash[strArr]) {
      anagramHash[strArr] = [str];
    } else {
      anagramHash[strArr].push(str);
    }
  });

  console.log(anagramHash);
}


// O(n) space and O(nlog(n)) time
// function isAnagram(str1, str2) {
//   if(!str1 || !str2 || str1.length !== str2.length) {
//     return false;
//   }
//
//   let arr1 = str1.split("").sort();
//   let arr2 = str2.split("").sort();
//
//   for(let i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//
//   return true;
// }


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


// just leaving this here for now
// let answer = [];
// let checkedWord;
//
// while(strs.length > 0) {
//   checkedWord = strs.shift();
//   let counter = 0;
//   let subArr = [checkedWord];
//
//   let currentWord = strs[0];
//
//   while(currentWord) {
//     if(isAnagram(checkedWord, currentWord)) {
//       subArr.push(currentWord);
//       strs.splice(counter, 1);
//     } else {
//       counter++;
//       currentWord = strs[counter];
//     }
//   }
//
//   answer.push(subArr);
// }
//
// return answer;
