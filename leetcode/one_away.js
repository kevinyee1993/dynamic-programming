function oneAway(str1, str2) {
  if(str1.length > str2.length + 1 || str2.length > str1.length + 1) {
    return false;
  }

  let counter1 = charCounter(str1);
  let counter2 = charCounter(str2);

  // console.log(Object.keys(counter1)[0]);
  // console.log(Object.keys(counter1).length);

  return compareCounts(counter1, counter2);
}

function charCounter(str) {
  let counter = {};

  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if(counter[currChar]) {
      counter[currChar]++;
    } else {
      counter[currChar] = 1;
    }
  }

  return counter;
}

function compareCounts(counter1, counter2) {
  let numDifferences = 0;

  for(let i = 0; i < Object.keys(counter1).length; i++) {
    let currentKey = Object.keys(counter1)[i];
      if(counter1[currentKey] !== counter2[currentKey]) {
        numDifferences++;
      }
  }

  return (numDifferences <= 1);
}

console.log(oneAway("farts", "badts"));
