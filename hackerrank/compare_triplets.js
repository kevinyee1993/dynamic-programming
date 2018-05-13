function compareTriplets(scores1, scores2) {
  let scoreTotal1 = 0;
  let scoreTotal2 = 0;

  for(let i = 0; i < scores1.length; i++) {
    if(scores1[i] > scores2[i]) {
      scoreTotal1++;
    } else if (scores2[i] > scores1[i]) {
      scoreTotal2++;
    }
  }

  return [scoreTotal1, scoreTotal2];
}

//time complexity = O(n) because looping through an array once
//space complexity = O(n) because creating 2 arrays -> 2n simplifies to n

let answer = compareTriplets([5,6,7], [3,6,8]);
console.log(answer);
