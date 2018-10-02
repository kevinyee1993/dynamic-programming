// O(n) time, O(1) space
function factorialZeroes(n) {
  const factorialN = getFactorial(n);
  return countTrailingZeroes(factorialN);
}

// O(n) time, O(1) space
function getFactorial(n) {
  let answer = 1;
  let currNumber = n;

  while(currNumber > 0) {
    answer *= currNumber;
    currNumber--;
  }

  return answer;
}

// O(n) time, O(1) space
function countTrailingZeroes(n) {
  let currNumber = n;
  let count = 0;

  while(currNumber > 0) {
    if(currNumber % 10 === 0) {
      count++;
      currNumber /= 10;
    } else {
      return count;
    }
  }

  return count;
}

console.log(getFactorial(4));
console.log(countTrailingZeroes(10200));
