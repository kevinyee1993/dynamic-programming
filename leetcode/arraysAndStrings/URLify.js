// easy regex way lmao
function URLify(str) {
  return str.replace(/ +/g, "%20");
}

// O(n) time and space
function URLify2(str) {
  let answer = "";
  let foundSpace = false;

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if(currChar !== " ") {
      answer = answer.concat(currChar);
      foundSpace = false;
    } else if(!foundSpace && currChar === " "){
      answer = answer.concat("%20");
      foundSpace = true;
    }
  }

  return answer;
}

console.log(URLify2("she sells    seashells"));
