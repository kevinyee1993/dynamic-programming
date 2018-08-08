/*
Naive solution
time: O(nm) where n is the length of the paragraph and m is the length of banned words
space: O(n) linear because creating new strArr and hash

First optimization
time: O(n) turned banned array into hash and just did constant time lookup
for each word in that hash instead of looping through the entire array multiple times
*/

function mostCommonWord(paragraph, banned) {
  paragraph = paragraph.replace(/[^a-zA-Z ]/g, '').toLowerCase();

  let strArr = paragraph.split(" ");
  let bannedHash = {};
  let wordCounter = {};
  let biggestCount = 0;
  let mostWord = null;

  banned.forEach(word => {
    bannedHash[word.toLowerCase()] = true;
  });

  for(let i = 0; i < strArr.length; i++) {
    let word = strArr[i].toLowerCase();

    if(bannedHash[word]) {
      strArr.splice(i, 1);
      i--;
    }
  }


  // banned.forEach(word => {
  //   for(let i = 0; i < strArr.length; i++) {
  //     if(strArr[i] === word.toLowerCase()) {
  //       strArr.splice(i, 1);
  //       i--;
  //     }
  //   }
  // });

  console.log(strArr);

  strArr.forEach(word => {
    if(!wordCounter[word]) {
      wordCounter[word] = 1;
    } else {
      wordCounter[word]++;
    }

    if(wordCounter[word] > biggestCount) {
      biggestCount = wordCounter[word];
      mostWord = word;
    }
  });

  console.log(mostWord);
  return mostWord;

}

mostCommonWord("abc abc? abcd the jeff!", ["abc","abcd","jeff"]);
