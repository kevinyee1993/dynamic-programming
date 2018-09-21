function tripleStepStart(numSteps) {
    return tripleStep(numSteps, {});
}

// O(n) space complexity where n is depth of call stack
// O(n) time because looking at each number once, lookup should be constant
// because memoizing
function tripleStep(numSteps, cache) {
  if(numSteps < 0) {
    return 0;
  }

  if(numSteps === 0) {
    return 1;
  }


  if(cache[numSteps]) {
    return cache[numSteps];
  }

  cache[numSteps] = (tripleStep(numSteps - 3, cache) + tripleStep(numSteps - 2, cache) + tripleStep(numSteps - 1, cache));
  return cache[numSteps];
}

console.log(tripleStepStart(4));
