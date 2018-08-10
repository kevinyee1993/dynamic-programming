// booty take up hella space way for practice
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  let partition = arr.shift();
  let left = [];
  let right = [];

  arr.forEach( el => {
    if(el <= partition) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return quickSort(left).concat([partition]).concat(quickSort(right));
}

let farts = [5,23,1,8,56,2,9,546,13,12,5,8,9];
// console.log(farts);
console.log(quickSort(farts));
