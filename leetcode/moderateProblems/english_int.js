// O(n) time and space
function englishInt(num) {
  let biggestDigit = findBiggestDigit(num);
  let answer = "";

  const tensPlace = {
    9: 'ninety ',
    8: 'eighty ',
    7: 'seventy ',
    6: 'sixty ',
    5: 'fifty ',
    4: 'forty ',
    3: 'thirty ',
    2: 'twenty '
  };

  const underTwenty = {
    19: 'nineteen',
    18: 'eighteen',
    17: 'seventeen',
    16: 'sixteen',
    15: 'fifteen',
    14: 'fourteen',
    13: 'thirteen',
    12: 'twelve',
    11: 'eleven',
    10: 'ten',
    9: 'nine',
    8: 'eight',
    7: 'seven',
    6: 'six',
    5: 'five',
    4: 'four',
    3: 'three',
    2: 'two',
    1: 'one'
  };

  while(biggestDigit > 0) {
    console.log(biggestDigit);
    let digitsPlace;

    if(biggestDigit === 1000) {
      digitsPlace = findDigitsPlace(biggestDigit, num);
      num %= biggestDigit;
      biggestDigit /= 10;
      answer = answer.concat(underTwenty[digitsPlace] + " thousand ");
    } else if(biggestDigit === 100) {
      digitsPlace = findDigitsPlace(biggestDigit, num);
      num %= biggestDigit;
      biggestDigit /= 10;
      answer = answer.concat(underTwenty[digitsPlace] + " hundred and ");
    } else if(biggestDigit === 10) {
      if(num >= 20) {
        digitsPlace = findDigitsPlace(biggestDigit, num);
        num %= biggestDigit;
        biggestDigit /= 10;
        answer = answer.concat(tensPlace[digitsPlace]);
      } else {
        answer = answer.concat(underTwenty[num]);
        break;
      }
    } else {
      answer = answer.concat(underTwenty[num]);
      biggestDigit = Math.floor(biggestDigit / 10);
    }
  }

  return answer;

}

// O(1) time and space
function findDigitsPlace(biggestDigit, num) {
  return Math.floor(num / biggestDigit);
}

// O(n) time
// O(1) space
function findBiggestDigit(num) {
  let biggestDigit = 1;

  while(num / biggestDigit >= 10) {
    biggestDigit *= 10;
  }

  return biggestDigit;
}

console.log(englishInt(1219));
