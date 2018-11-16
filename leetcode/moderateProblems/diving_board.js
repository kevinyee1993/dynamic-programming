// O(n) space
// O(k) time

function divingBoard(shorter, longer, k) {
  const possibleLengths = [];
  let currLength = shorter * k;
  possibleLengths.push(currLength);

  for(let i = 0; i < k; i++) {
    currLength -= shorter;
    currLength += longer;
    possibleLengths.push(currLength);
  }

  return possibleLengths;
}

console.log(divingBoard(1,2,3));
