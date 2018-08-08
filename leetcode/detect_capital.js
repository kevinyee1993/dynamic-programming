// O(1) time and space

function detectCapital(word) {
  if(word === word.toUpperCase()) {
    return true;
  }

  if(word === word.toLowerCase()) {
    return true;
  }

  let capStr = word[0].toUpperCase() + word.slice(1).toLowerCase();


  if(word === capStr) {
    return true;
  }

  return false;
}

console.log(detectCapital("FarT"));
