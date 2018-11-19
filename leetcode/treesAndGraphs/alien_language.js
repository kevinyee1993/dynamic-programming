function alienLanguage(words) {
  const beforeCounter = {};
  const afterWords = {};

  for(let i = 0; i < words.length - 1; i++) {
    let currWord = words[i];
    let nextWord = words[i + 1];

    if(currWord[0] !== nextWord[0]) {
      // updates the prereq counter
      updateBeforeCounter(beforeCounter, nextWord[0], true);
      updateAfterWords(afterWords, currWord[0], nextWord[0], true);
    } else if(currWord[0] === nextWord[0]) {
      let currIdx = 1;
      while(currWord[currIdx] === nextWord[currIdx]) {
        currIdx++;
      }

      updateBeforeCounter(beforeCounter, nextWord[currIdx], false);
      updateAfterWords(afterWords, currWord[currIdx], nextWord[currIdx], false);
    }
  }

  console.log(beforeCounter);
  console.log(afterWords);
}


function updateBeforeCounter(beforeCounter, char) {
    if(!beforeCounter[char]) {
      beforeCounter[char] = 1;
    } else {
      beforeCounter++;
    }
}

function updateAfterWords(afterWords, currChar, nextChar) {
  if(!afterWords[currChar]) {
    afterWords[currChar] = [nextChar];
  } else {
    afterWords[currChar].push(nextChar);
  }
}

const words = ["baa", "abcd", "abca", "cab", "cad"];
alienLanguage(words);
