var shortestToChar = function(S, C) {
  // everytime you reach a C, previousC becomes 0
  // everytime you progress without hitting a C, this increments
  // reset to 0 everytime you encounter a new C
  let previousC = null;

  // create a method to find the next C's position
  let nextC = null;

  // in java you would make this array as long as however long the string is
  let answer = [];

  // loop through the string.  if previousC is null or 0, call findNextC
  for(let i = 0; i < S.length; i++) {
    if(nextC === null || previousC === 0) {
      nextC = findNextC(i, S, C);
    }

    if(S[i] === C) {
      previousC = 0;
    } else if(previousC !== null) {
      previousC++;
    }

    if(!nextC || previousC !== null && previousC < nextC - i) {
      answer.push(previousC);
    } else {
      answer.push(nextC - i);
    }
  }

  return answer;
};


// O(n) time
function findNextC(currentIndex, S, C) {
  let nextC = undefined;

  for(let i = currentIndex; i < S.length; i++) {
    if(S[i] === C) {
      // return i - currentIndex;
      return i;
    }
  }
}

console.log(shortestToChar("aaba", 'b'));
