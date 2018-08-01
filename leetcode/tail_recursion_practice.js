function fact(n) {
  return tailRecFact(n, 1);
}

function tailRecFact(n, result) {
  if(n === 0) {
    return result;
  }

  return tailRecFact(n - 1, result * n);
}

console.log(fact(3));
