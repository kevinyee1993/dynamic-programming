/*
10 and 20 will always be just associated with one character each
1-9 will be one character
11-19 and 21-26 could be associated with either 1 or 2 chars


*/

function numWaysDecode(message) {
  return helper(message, message.length);
}

function helper(message, numLastLetters) {
  if(message[0] === '0' || message === "") {
    return 0;
  }
}
