// O(n) time and O(1) space

function rotateString(A, B) {
  let poo = stringRotation(A);

  if(A === B) {
    return true;
  }

  for(let i = 0; i < A.length; i++) {
    A = stringRotation(A);
    if(A === B) {
      return true;
    }
  }

  return false;
}

function stringRotation(str) {
  let firstChar = str[0];
  str = str.slice(1, str.length) + firstChar;

  return str;
}

console.log(rotateString("cdezab", "abcde"));
