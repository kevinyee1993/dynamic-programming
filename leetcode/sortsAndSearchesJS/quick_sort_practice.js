function quickSort(array) {
  helper(array, 0, array.length - 1);
}

function helper(array, start, end) {
  if(start >= end) {
    return array;
  }

  const pivot = array[end];
  const partitionIndex = partition(array, start, end, pivot);

  helper(array, start, partitionIndex - 1);
  helper(array, partitionIndex + 1, end);
}

function partition(array, start, end, pivot) {
  let partitionIndex = start;

  for(let i = start; i < end; i++) {
    if(array[i] < pivot) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, end);

  return partitionIndex;
}

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}







// function quickSort(arr, left, right) {
//   if(left >= right) {
//     return arr;
//   }
//
//   let pivot = arr[right];
//   let partitionIndex = partition(arr, left, right, pivot);
//
//   quickSort(arr, left, partitionIndex - 1);
//   quickSort(arr, partitionIndex + 1, right);
// }
//
// function partition(arr, left, right, pivot) {
//   let partitionIndex = left;
//
//   for(let i = left; i < right; i++) {
//     if(arr[i] < pivot) {
//       swap(arr, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//
//   swap(arr, partitionIndex, right);
//
//   return partitionIndex;
// }
//
// function swap(arr, idx1, idx2) {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

let a = [5,1,643,2,53,1,97,5,8];
// quickSort(a, 0, a.length - 1);
quickSort(a);
console.log(a);
