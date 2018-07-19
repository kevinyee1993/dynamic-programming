var findComplement = function(num) {

};


// don't start at 1, should start at max if you wanna take this approach
function turnNumberToBit(num) {
  let bit = "";
  let currentBit = 1;

  if(num === 0) {
    return "0";
  }

  while(num > 0) {
    console.log(num);
    if(num >= currentBit) {
      num -= currentBit;
      bit = "1" + bit;
    } else {
      bit = "0" + bit;
    }

    currentBit *= 2;
  }

  return bit;
}

function turnBitToNumber(bit) {

}

console.log(turnNumberToBit(5));
// console.log(turnNumberToBit(2));
