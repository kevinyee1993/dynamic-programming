// O(n) time and space where n = the amount of letters total in input array

function uniqueMorseRepresentations(words) {
  const morseLetters = [".-","-...","-.-.","-..",
  ".","..-.","--.","....","..",".---","-.-",".-..",
  "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
  ".--","-..-","-.--","--.."];

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let dictionary = {};
  let counter = 0;
  let translatedWords = {};

  for(let i = 0; i < alphabet.length; i++) {
    dictionary[alphabet[i]] = morseLetters[i];
  }

  for(let i = 0; i < words.length; i++) {
    let currWord = words[i];
    let currTrans = "";

    for(let j = 0; j < currWord.length; j++) {
      currTrans = currTrans.concat(dictionary[currWord[j]]);
    }

    if(!translatedWords[currTrans]) {
      translatedWords[currTrans] = true;
      counter++;
    }
    
  }

  return counter;
}

let words = ["gin", "zen", "gig", "msg"];

console.log(uniqueMorseRepresentations(words));
