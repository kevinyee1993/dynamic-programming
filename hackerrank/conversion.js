//time complexity: O(n) because have to go down each bit of the binary rep
//space complexity: O(1) because just creating a sameOnes and a count var
function conversion(num1, num2) {
  let sameOnes = num1 ^ num2;
  let count = 0;

  for(let i = sameOnes; sameOnes > 0; sameOnes = sameOnes >> 1) {
    count += (sameOnes & 1);
  }

  return count;

}

/*
CTCI optimized way to do in Java

int bitSwapRequired(int a, int b) {
  int count = 0;
  for(int c = a ^ b; c != 0; c = c & (c - 1)) {
  count++;
}

return count;
}

*/


console.log(conversion(7,4));
