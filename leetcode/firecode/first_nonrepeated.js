// O(n) time and space
function firstNonrepeatedCharacter(str) {
  const charCounter = {};
  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if(!charCounter[currChar]) {
      charCounter[currChar] = 1;
    } else {
      charCounter[currChar]++;
    }
  }

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if(charCounter[currChar] === 1) {
      return currChar;
    }
  }

  return null;
}
