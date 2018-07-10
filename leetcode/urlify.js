// perform operation in place
// javascript strings are immutable
// use array of characters to do in place

function urlify(str) {
  // remove all the trailing spaces from string
  removeTrailingSpaces(str);

  // replace all spaces with %20
  replaceCharacters(str, ' ', '%20');

  return str;
}

// O(n) time, O(1) space
function removeTrailingSpaces(str) {
  while(str[str.length - 1] === ' ') {
    str.pop();
  }

  return str;
}

// O(n) time, O(1) space
function replaceCharacters(str, target, replacement) {
  for(let i = 0; i < str.length; i++) {
    if(str[i] === target) {
      str[i] = replacement;
    }
  }

  return str;
}



let a = ['a', 'b', 'c', ' ', ' ', 'd', ' '];
// console.log(removeTrailingSpaces(a));
console.log(urlify(a));
