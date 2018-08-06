/*
10 and 20 will always be just associated with one character each
1-9 will be one character
11-19 and 21-26 could be associated with either 1 or 2 chars


*/

function numWaysDecode(message) {
  return helper(message, message.length);
}

function helper(message, numLastLetters) {
  let startRef = message.length - numLastLetters;
  if(message[startRef] === '0') {
    return 0;
  }

  if(message === "") {
    return 1;
  }

  const numToLetters = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10": "j",
    "11": "k",
    "12": "l",
    "13": "m",
    "14": "n",
    "15": "o",
    "16": "p",
    "17": "q",
    "18": "r",
    "19": "s",
    "20": "t",
    "21": "u",
    "22": "v",
    "23": "w",
    "24": "x",
    "25": "y",
    "26": "z"
  };

  if( !numToLetters[message[startRef] + message[startRef + 1]]) {
    return 0;
  }

  let firstOptionCount = 1 + helper(message, numLastLetters - 1);
  let secondOptionCount = 1 + helper(message, numLastLetters - 2);

  return firstOptionCount + secondOptionCount;

}
