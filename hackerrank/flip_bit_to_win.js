//time complexity: O(n) because going through each element once of each array
//space complexity: O(n) because creating new data structure to hold all the lenghts,
//worst case could be linear amount of lengths

function numToBinary(num) {
  let result = "";

  let bitTrack = maxBitOfNum(num);

  while(bitTrack >= 1) {
    if(num >= bitTrack) {
      num -= bitTrack;
      result += "1";
    } else {
      result += "0";
    }
    bitTrack /= 2;
  }

  return result;
}

function maxBitOfNum(num) {
  let currNum = 1;

  while(num >= currNum) {
    currNum *= 2;
  }

  return currNum / 2;
}

function flipBitToWin(num) {
  let binaryRep = numToBinary(num);

  let lengthTracker = [];
  let currLength = 0;

  for(let i = 0; i < binaryRep.length; i++) {
    if(binaryRep[i] === '1') {
      currLength++;
    } else if (binaryRep[i] === '0' && binaryRep[i + 1] === '0'){
      currLength = 0;
    } else if(binaryRep[i] === '0' && binaryRep[i + 1] !== '0' && currLength > 0){
      lengthTracker.push(currLength);
      currLength = 0;
    }
  }

  if(currLength > 0) {
    lengthTracker.push(currLength);
  }

  return findLongestTwoAdjacent(lengthTracker);


}

function findLongestTwoAdjacent(arr) {
  let max = 0;

  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] + arr[i + 1] > max) {
      max = arr[i] + arr[i + 1];
    }
  }

  return max + 1;
}

// console.log(numToBinary(1775));
console.log(flipBitToWin(1775));
