function lemonadeChange(bills) {
  let change = { 5:0, 10:0 };



  for(let i = 0; i < bills.length; i++) {

      if(bills[i] === 5) {
        change[5]++;
      } else if(bills[i] === 10) {
        if(change[5] === 0) {
          return false;
        } else {
          change[5]--;
          change[10]++;
        }

      } else if (bills[i] === 20) {
        if(change[10] > 0) {
          change[5]--;
          change[10]--;
        } else {
          change[5] -= 3;
        }

        if(change[5] < 0 || change[10] < 0) {
          return false;
        }
      }
  }

  return true;
}

console.log(lemonadeChange([5,5,10,10,20]));
