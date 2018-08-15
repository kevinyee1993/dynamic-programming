function groupAnagrams(strs) {
  let anagramHash = {};
  let strArr;
  let answer = [];

  strs.forEach(str => {
    strArr = str.split("").sort();
    if(!anagramHash[strArr]) {
      anagramHash[strArr] = [str];
    } else {
      anagramHash[strArr].push(str);
    }
  });

  // extract the keys later brody
  let hashKeys = Object.keys(anagramHash);
  hashKeys.forEach(key => {
    answer.push(anagramHash[key]);
  });

  return answer;
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
