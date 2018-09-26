// naive solution
// O(n^2) time complexity
// O(1) space complexity
function getMaxProfit(stockPrices) {
  let highestProfit = 0;

  for(let i = 0; i < stockPrices.length; i++) {
    for(let j = i + 1; j < stockPrices.length; j++) {
      let currProfit = stockPrices[j] - stockPrices[i];

      if(currProfit > highestProfit) {
        highestProfit = currProfit;
      }
    }
  }

  return highestProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));
