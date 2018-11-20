function knapsack(arr, capacity) {
  const table = [];

  for(let i = 0; i < arr.length; i++) {
    let row = new Array(capacity + 1);
    row.fill(0);
    table.push(row);
  }

  for(let i = 0; i < table[0].length; i++) {
    let currWeight = arr[0][0];
    if(currWeight <= i) {
      table[0][i] = arr[0][1];
    }
  }

  for(let row = 1; row < arr.length; row++) {
    let currWeight = arr[row][0];
    for(let col = 0; col < capacity + 1; col++) {
      if(currWeight <= col) {
        table[row][col] = arr[row][1];
        let leftoverCapacity = col - currWeight;

        if(leftoverCapacity > 0) {
          table[row][col] += table[row-1][leftoverCapacity];
          leftoverCapacity -= table[row-1][leftoverCapacity];
        }
      }

      if(table[row - 1][col] > table[row][col]) {
        table[row][col] = table[row - 1][col];
      }
    }
  }

  console.log(table);
}

// first is weight, second is value
const bag = [[1,1], [3,4], [4,5],[5,7]];
knapsack(bag, 7);
