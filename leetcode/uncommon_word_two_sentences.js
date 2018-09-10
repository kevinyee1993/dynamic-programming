// O(n) time and space

function uncommonFromSentences(A, B) {
  const countA = turnArrToHash(A.split(" "));
  const countB = turnArrToHash(B.split(" "));
  const answer = [];

  Object.keys(countA).forEach( el => {
    if(countA[el] === 1 && !countB[el]) {
      answer.push(el);
    }
  });

  Object.keys(countB).forEach( el => {
    if(countB[el] === 1 && !countA[el]) {
      answer.push(el);
    }
  });


  return answer;
}

function turnArrToHash(arr) {
  const hash = {};

  for(let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if(!hash[word]) {
      hash[word] = 1;
    } else {
      hash[word]++;
    }
  }
  return hash;
}

console.log(uncommonFromSentences("apple apple", "banana"));
