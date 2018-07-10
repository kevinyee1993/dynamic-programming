// perform operation in place
// javascript strings are immutable
// use array of characters to do in place

function urlify(str) {
  // remove all the trailing spaces from string
  // replace all spaces with %20
}

function removeTrailingSpaces(str) {
  while(str[str.length - 1] === ' ') {
    str.pop();
  }

  return str;
}

let a = ['a', 'b', 'c', ' ', ' ', 'd'];
console.log(removeTrailingSpaces(a));
