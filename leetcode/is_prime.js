// O(n) time where n = size of the number
// O(1) space

function isPrime(num) {
  if(num === 2) {
    return true;
  }

  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17));
