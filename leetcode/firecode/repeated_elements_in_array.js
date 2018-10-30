// O(n) time and space
function duplicate(numbers) {
  const seenNumbers = {};
  const dupes = [];

  for(let i = 0; i < numbers.length; i++) {
    let currNum = numbers[i];

    if(!seenNumbers[currNum]) {
      seenNumbers[currNum] = 1;
    } else {
      seenNumbers[currNum]++;
    }
  }

  Object.keys(seenNumbers).forEach( number => {
    console.log(number);
    if(seenNumbers[number] > 1) {
      dupes.push(number);
    }
  });

  dupes.sort( (a,b) => {return a - b;} );
  console.log(dupes);

  let answer = "";

  dupes.forEach(number => {
    answer = answer.concat(number + ", ");
  });

  console.log("[" + answer.slice(0, answer.length - 2) + "]");
}

duplicate([1,1,5,5,8,4,1,4]);
