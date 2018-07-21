var findComplement = function(num) {
  let biggestBit = findBiggestBit(num);
  let answer = turnNumberToBit(num, biggestBit);

  return turnBitToNumber(answer);

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

function turnBitToNumber(bit) {
  let currentBit = 1;
  let sum = 0;

  for(let i = 0; i < bit.length; i++) {
    let leastSigBit = bit[bit.length - 1 - i];

    if(leastSigBit === "1") {
      sum += currentBit;
    }

    currentBit *= 2;
  }

  return sum;
}

// console.log(turnBitToNumber("110"));
console.log(findComplement(5));
