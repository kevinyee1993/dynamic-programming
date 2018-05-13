function isUnique(str) {
  let charCounter = { };

  for(let i = 0; i < str.length; i++) {
    if(!charCounter[str[i]]) {
      charCounter[str[i]] = 1;
    } else {
      charCounter[str[i]]++;
    }

    if(charCounter[str[i]] > 1) {
      return false;
    }
  }

  return true;
}


console.log(isUnique("hello"));
console.log(isUnique("helo"));
console.log(isUnique("heo"));
console.log(isUnique("hheo"));
