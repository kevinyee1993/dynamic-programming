// O(n) time and space

var reverseWords = function(s) {
  let newStr = "";

  // O(n) operation
  for(let i = 0; i < s.length; i++) {
    newStr += s[s.length - 1 - i];
  }

  let stringToArray = newStr.split(" ");

  // O(n) operation
  flipArray(stringToArray);

  return stringToArray.join(" ");
};

function flipArray(arr) {
  for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

console.log(reverseWords("farts parts barts"));
