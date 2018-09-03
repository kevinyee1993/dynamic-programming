function isMonotonic(A) {

  // edge case if length of array is just 1
  if(A.length <= 1) {
    return true;
  }

  let prevNum = A[0];
  let trend;

  if(A[0] > A[A.length - 1]) {
    trend = -1;
  } else {
    trend = 1;
  }

  for(let i = 1; i < A.length; i++) {

    // for the condition here, check if the array is trending
    // up or down rather than just up
    if( disobeysTrend(prevNum, A[i], trend) ) {
      return false;
    }

    prevNum = A[i];
  }

  return true;
}

function disobeysTrend(prevNum, currNum, trend) {
  if(trend === 1) {
    return (prevNum - currNum) > 0;
  } else {
    return (prevNum - currNum) < 0;
  }
}

const test = [1,1,1,0];
console.log(isMonotonic(test));
