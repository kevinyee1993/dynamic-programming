var findComplement = function(num) {
  let biggestBit = findBiggestBit(num);
  const answer = turnNumberToBit(num, biggestBit);

  return parseInt(answer);

};

function findBiggestBit(num) {
  let currentBit = 1;

  while(currentBit < num) {
    currentBit *= 2;
  }

  if(currentBit === num) {
    return currentBit;
  } else {
    return currentBit / 2;
  }
}

function turnNumberToBit(num, bigBit) {
  let bit = "";
  let currentBit = bigBit;

  if(num === 0) {
    return "1";
  }

  while(currentBit > 0) {
    if(num >= currentBit) {
      num -= currentBit;
      bit += "0";
    } else {
      bit += "1";
    }

    currentBit = Math.floor(currentBit / 2);
  }

  return bit;
}

console.log(findComplement(3));
