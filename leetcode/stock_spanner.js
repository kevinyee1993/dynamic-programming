// O(n^2) time, O(n) space

function stockSpanner(stocks) {
  let answer = [];

  for(let i = 0; i < stocks.length; i++) {
    let val = checkPrev(stocks.slice(0, i+1));
    answer.push(val);
  }

  return answer;
}

function checkPrev(stocks) {
  let count = 0;
  let refPrice = stocks[stocks.length - 1];

  for(let i = 0; i < stocks.length; i++) {
    if(stocks[stocks.length - 1 - i] <= refPrice) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

let test = [100, 80, 60, 70, 60, 75, 85];
console.log(stockSpanner(test));
