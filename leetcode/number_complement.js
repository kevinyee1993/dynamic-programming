var findComplement = function(num) {

  // turn num to its complement
  let numToComplement = ~num;


  // turn leftmost 1 into a 0
  // leading 0 with all 1s | with the other numbers should give the non negative complement


  
};




// oh can just take a number complement with ~num and then turn the
// very biggest bit (which turned into a 1) into a 0.

// // don't start at 1, should start at max if you wanna take this approach
// function turnNumberToBit(num) {
//   let bit = "";
//   let currentBit = 1;
//
//   if(num === 0) {
//     return "0";
//   }
//
//   while(num > 0) {
//     console.log(num);
//     if(num >= currentBit) {
//       num -= currentBit;
//       bit = "1" + bit;
//     } else {
//       bit = "0" + bit;
//     }
//
//     currentBit *= 2;
//   }
//
//   return bit;
// }
//
// function turnBitToNumber(bit) {
//
// }
