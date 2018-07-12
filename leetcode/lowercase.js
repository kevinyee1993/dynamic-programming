// O(n) time and O(n) space
// did it long way instead of just toLowerCase() the string because
// otherwise too easy

function toLowerCase(str) {

  let newStr = "";
  for(let i = 0; i < str.length; i++) {
    newStr +=  str[i].toLowerCase();
  }

  return newStr;
}
