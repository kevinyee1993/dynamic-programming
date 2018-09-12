// O(n) time
// O(1) space if you don't cnosider the passed in arg
// as extra space

function has2InParams(...args) {
  for(let i = 0; i < args.length; i++) {
    if(args[i] === 2) {
      return true;
    }
  }

  return false;
}

console.log(has2InParams(1,3,4,6, "dog", 2, 551, "butts"));
