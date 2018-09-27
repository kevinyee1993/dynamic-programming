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


// O(n) time
// O(1) space
function efficientGetMaxProfit(stockPrices) {
  let currLowPrice = stockPrices[0];
  let highestProfit = 0;

  for(let i = 1; i < stockPrices.length; i++) {
    let currPrice = stockPrices[i];

    if(currPrice - currLowPrice > highestProfit) {
      highestProfit = currPrice - currLowPrice;
    }

    if(currPrice - currLowPrice < 0) {
      currLowPrice = currPrice;
    }
  }

  return highestProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(efficientGetMaxProfit(stockPrices));
