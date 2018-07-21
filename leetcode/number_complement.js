var findComplement = function(num) {

  // turn num to its complement
  let numToComplement = ~num;


  // turn leftmost 1 into a 0
  // leading 0 with all 1s | with the other numbers should give the non negative complement



};

function findBiggestBit(num) {
  let currentBit = 1;

  while(currentBit < num) {
    currentBit *= 2;
  }

  return currentBit;
}





// oh can just take a number complement with ~num and then turn the
// very biggest bit (which turned into a 1) into a 0.

// // don't start at 1, should start at max if you wanna take this approach
function turnNumberToBit(num, bigBit) {
  let bit = "";
  let currentBit = bigBit;

  if(num === 0) {
    return "1";
  }

  while(currentBit > 0) {
    if(num >= currentBit) {
      num -= currentBit;
      // bit = "0" + bit;
      bit += "0";
    } else {
      // bit = "1" + bit;
      bit += "1";
    }

    currentBit = Math.floor(currentBit / 2);
  }

  return bit;
}

console.log(turnNumberToBit(5, 8));

function turnBitToNumber(bit) {

}
