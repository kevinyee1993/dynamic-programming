// time complexity: O(n) where n is the amount of characters total of the words
// rather than the number of entries

var findWords = function(words) {
  const row1 = createKeyboardRowHash('qwertyuiop',1);
  const row2 = createKeyboardRowHash('asdfghjkl',2);
  const row3 = createKeyboardRowHash('zxcvbnm',3);

  const combinedRowsHash = Object.assign(row1, row2, row3);
  let answers = [];

  // for(let i = 0; i < words; i++) {
  //
  // }

  console.log(combinedRowsHash);
};


// O(n) time complexity
function createKeyboardRowHash(letters, rowNumber) {
  let keyboardRow = {};

  for(let i = 0; i < letters.length; i++) {
    keyboardRow[letters[i]] = rowNumber;
  }

  return keyboardRow;
}

// function checkWord(word, combinedRowsHash) {
//   let previousRow = undefined;
//   for(let i = 0; i < word.length; i++) {
//
//     let currentRow = combinedRowsHash[word[i]];
//
//     if(previousRow) {
//       if(previousRow !== currentRow) {
//         return false;
//       }
//
//       previousRow = currentRow;
//
//     } else {
//       previousRow = currentRow;
//     }
//   }
//
//   return true;
// }

findWords();
