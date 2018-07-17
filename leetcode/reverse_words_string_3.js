// O(n) time and space

var reverseWords = function(s) {
  let newStr = "";

  for(let i = 0; i < s.length; i++) {
    newStr += s[s.length - 1 - i];
  }

  return newStr;
};
