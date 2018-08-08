/*
Naive solution
time: O(nm) where n is the length of the paragraph and m is the length of banned words
space: O(n) linear because creating new strArr and hash
*/

function mostCommonWord(paragraph, banned) {
  paragraph = paragraph.replace(/[^a-zA-Z ]/g, '').toLowerCase();

  let strArr = paragraph.split(" ");
  let wordCounter = {};
  let biggestCount = 0;
  let mostWord = null;


  banned.forEach(word => {
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === word.toLowerCase()) {
        strArr.splice(i, 1);
        i--;
      }
    }
  });

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
