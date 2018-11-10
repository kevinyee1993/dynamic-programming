// O(n) time
// O(n) space
function stringCompression(str) {
  let compressedStr = "";
  let charCount = 1;

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    let nextChar = str[i + 1];

    if(currChar === nextChar) {
      charCount++;
    } else {
      compressedStr = compressedStr.concat(currChar + charCount);
      charCount = 1;
    }
  }

  if(compressedStr.length >= str) {
    return str;
  } else {
    return compressedStr;
  }
}

console.log(stringCompression('aabcccccaaa'));
