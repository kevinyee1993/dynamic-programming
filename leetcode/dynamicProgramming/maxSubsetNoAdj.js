// O(n) time and space

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	const bestPossible = new Array(array.length);
	for(let i = 0; i < array.length; i++) {
		if(i === 0) {
			bestPossible[i] = array[i];
		} else if(i === 1) {
			if(array[i] > array[i - 1]) {
				bestPossible[i] = array[i];
			} else {
				bestPossible[i] = array[i - 1];
			}
		} else {
      let oneAway = bestPossible[i - 1];
      let twoAway = bestPossible[i - 2];

      if(oneAway > twoAway + array[i]) {
        bestPossible[i] = oneAway;
      } else {
        bestPossible[i] = twoAway + array[i];
      }
    }
  }

	return bestPossible[bestPossible.length - 1];
}

console.log(maxSubsetSumNoAdjacent([7,10,12,7,3,14]));
