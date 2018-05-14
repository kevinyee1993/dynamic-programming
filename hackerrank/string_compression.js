//solution 1
//time: O(n) because have to go through each char of a string once
//space: O(n) because creating a new string to keep track of compressed str

function stringCompression(str) {
  let compressedStr = "";

  let prevChar = "";
  let charCount;

  for(let i = 0; i < str.length; i++) {
    if(prevChar === "") {
      charCount = 1;
      prevChar = str[i];
    } else if(str[i] === prevChar) {
      charCount++;
    } else if(str[i] !== prevChar) {
      compressedStr += prevChar;
      compressedStr += charCount;

      //resets the count and the letter that is being tracked
      charCount = 1;
      prevChar = str[i];
    }
  }

  compressedStr += prevChar;
  compressedStr += charCount;


  if(compressedStr.length < str.length) {
    return compressedStr;
  } else {
    return str;
  }
}


console.log(stringCompression("abbbb"));
