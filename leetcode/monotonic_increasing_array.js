function isMonotonic(A) {

  // edge case
  if(A.length <= 1) {
    return true;
  }

  let prevNum = A[0];

  let direction;


  for(let i = 1; i < A.length; i++) {
    if(prevNum > A[i]) {
      return false;
    }

    prevNum = A[i];
  }

  return true;
}

const test = [1,2,2,3];
console.log(isMonotonic(test));
