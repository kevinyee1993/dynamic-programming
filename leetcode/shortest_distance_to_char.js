// O(n) time and space

function shortestToChar(S, C) {
  const charLocations = [];
  const answer = [];

  for(let i = 0; i < S.length; i++) {
    if(S[i] === C) {
      charLocations.push(i);
    }
  }


  for(let i = 0; i < S.length; i++) {
    if(charLocations.length === 1) {
      let diff = Math.abs(charLocations[0] - i);
      answer.push(diff);
    } else {
      let diff1 = Math.abs(charLocations[0] - i);
      let diff2 = Math.abs(charLocations[1] - i);

      if(diff1 < diff2) {
        answer.push(diff1);
      } else {
        answer.push(diff2);
        charLocations.shift();
      }
    }
  }

  return answer;
}

console.log(shortestToChar("loveleetcode", 'e'));
