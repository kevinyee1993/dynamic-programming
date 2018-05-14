//time: O(n) because have to loop through each character of the str everytime
//space: O(n) because creating new hash 

function palindromePermutation(str) {
  let charCount = { };

  //ideally want to make a brand new string rather than reassigning the string
  //passed in but just for convenience I'm doing this

  //actually turns out that this doesnt' affect the string, I guess strings
  //don't pass the reference here so you're just changing a copy of the string
  str = str.toLowerCase();

  for(let i = 0; i < str.length; i++) {
    if(!charCount[str[i]] && str[i] !== " ") {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }

  let oddCount = 0;
  let keys = Object.keys(charCount);

  for(let i = 0; i < keys.length; i++) {
    if(charCount[keys[i]] % 2 === 1) {
      oddCount++;

      if(oddCount > 1) {
        return false;
      }
    }
  }

  return true;
}

let testStr = "TACO CAT";

console.log(palindromePermutation(testStr));
console.log(palindromePermutation("fart"));
console.log(palindromePermutation("atco cta"));
console.log(palindromePermutation("atcocta"));
console.log(palindromePermutation("atocta"));
