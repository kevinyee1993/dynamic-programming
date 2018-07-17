var findWords = function(words) {
  const row1 = createKeyboardRowHash('qwertyuiop',1);
  const row2 = createKeyboardRowHash('asdfghjkl',2);
  const row3 = createKeyboardRowHash('zxcvbnm',3);

  const combinedRowsHash = Object.assign(row1, row2, row3);
  console.log(combinedRowsHash);
};

function createKeyboardRowHash(letters, rowNumber) {
  let keyboardRow = {};

  for(let i = 0; i < letters.length; i++) {
    keyboardRow[letters[i]] = rowNumber;
  }

  return keyboardRow;
}

findWords();
