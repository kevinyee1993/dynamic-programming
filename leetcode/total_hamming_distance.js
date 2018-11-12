function totalHammingDistance(nums) {
  let mostDigits = 0;
  let hamDistanceSum = 0;
  const binaryReps = [];

  for(let i = 0; i < nums.length; i++) {
    let currBit = getBinaryRepresentation(nums[i]);
    if(currBit.length > mostDigits) {
      mostDigits = currBit.length;
    }
    binaryReps.push(currBit);
  }

  for(let i = 0; i < binaryReps.length; i++) {
    binaryReps[i] = addLeadingZeroes(binaryReps[i], mostDigits);
  }

  console.log(binaryReps);

  // O(n^2) operation
  for(let i = 0; i < binaryReps.length - 1; i++) {
    for(let j = i + 1; j < binaryReps.length; j++) {
      let currHamdistance = compareDifferentBits(binaryReps[i], binaryReps[j]);
      hamDistanceSum += currHamdistance;
    }
  }

  return hamDistanceSum;

}

// O(n) time
// O(n) space
function getBinaryRepresentation(num) {
  let closestBit = 1;
  let binary = "";

  while(closestBit <= num) {
    closestBit *= 2;
  }

  closestBit /= 2;

  while(closestBit > 0) {
    if(num >= closestBit) {
      num -= closestBit;
      binary = binary.concat("1");
    } else {
      binary = binary.concat("0");
    }

    closestBit = Math.floor(closestBit / 2);

  }

  return binary;
}

function addLeadingZeroes(bit, mostDigits) {
  const diff = mostDigits - bit.length;
  const leadingZeroes = "0".repeat(diff);

  return leadingZeroes.concat(bit);
}

function compareDifferentBits(bit1, bit2) {
  let numDiff = 0;

  for(let i = 0; i < bit1.length; i++) {
    if(bit1[i] !== bit2[i]) {
      numDiff++;
    }
  }

  return numDiff;
}

console.log(getBinaryRepresentation(4));
// totalHammingDistance([4,14,4]);
console.log(totalHammingDistance([4,14,4]));

console.log(getBinaryRepresentation(7));
