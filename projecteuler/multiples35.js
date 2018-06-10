function isDivisible35(num) {
  return num % 3 === 0 || num % 5 === 0;
}

function sumMultiples35(num) {
  let sum = 0;

  for(let i = 1; i < num; i++) {
    if(isDivisible35(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumMultiples35(1000));
