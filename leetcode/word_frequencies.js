// O(n) time where n is the number of words in the book
// O(n) space where n is the number of words in the book

// if running this operation, would be worth to just return
// a hash map of every word and their counts
function countWordFrequencies(book, word) {
  // need to get rid of all punctuation
  book = book.replace(/[^a-zA-Z ]/g, "");

  const allBookWords = book.split(" ");

  let wordHash = {};

  for(let i = 0; i < allBookWords.length; i++) {
    let currWord = allBookWords[i];

    if(!wordHash[currWord]) {
      wordHash[currWord] = 1;
    } else {
      wordHash[currWord]++;
    }
  }

  return wordHash;
}
