function mostCommonWord(paragraph, banned) {
  paragraph = paragraph.replace(/[^a-zA-Z ]/, '').toLowerCase();

  let strArr = paragraph.split(" ");
  let wordCounter = {};
  let biggestCount = 0;
  let mostWord = null;

  console.log(strArr);

  banned.forEach(word => {
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === word.toLowerCase()) {
        strArr.splice(i, 1);
      }
    }
  });


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


mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]);
