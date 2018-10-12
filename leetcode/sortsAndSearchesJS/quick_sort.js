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

function quickSort2(arr, left, right) {
  if(left >= right) {
    return arr;
  }

  let pivot = arr[right];
  let partitionIndex = partition(arr, left, right, pivot);

  // console.log(partitionIndex);
  // console.log(arr);

  quickSort2(arr, left, partitionIndex - 1);
  quickSort2(arr, partitionIndex + 1, right);
}

function partition(arr, left, right, pivot) {
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(arr[i] < pivot) {
      swap(arr, i , partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, right);
  return partitionIndex;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

}

let farts = [5,23,1,8,56,2,9,546,13,12,5,8,9];
quickSort2(farts, 0, farts.length - 1);
console.log(farts);
