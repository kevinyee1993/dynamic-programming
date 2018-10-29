// O(n) time, O(1) space
function compareTriplets(scores1, scores2) {
  let points1 = 0;
  let points2 = 0;

  for(let i = 0; i < scores1.length; i++) {
    if(scores1[i] > scores2[i]) {
      points1++;
    } else if(scores2[i] > scores1[i]) {
      points2++;
    }
  }

  return [points1, points2];
}

console.log(compareTriplets([17,28,30], [99,16,8]));
