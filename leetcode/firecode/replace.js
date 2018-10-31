// O(n) time, O(n) space
function replace(str, newWord) {
  let answer = "";

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      answer = answer.concat(str[i]);
    } else {
      answer = answer.concat(newWord);
    }
  }

  return answer;
}

console.log(replace("this is a test", "/"));
