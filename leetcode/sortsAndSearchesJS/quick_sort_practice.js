function quickSort(arr) {
  helper(arr, 0, arr.length - 1);
}

function helper(arr, start, end) {
  if(start >= end) {
    return arr;
  }

  let pivot = arr[end];
  let partitionIdx = partition(arr, start, end, pivot);

  helper(arr, start, partitionIdx - 1);
  helper(arr, partitionIdx + 1, end);
}

function partition(arr, start, end, pivot) {
  let partitionIdx = start;

  for(let i = start; i < end; i++) {
    if(arr[i] <= pivot) {
      swap(arr, i, partitionIdx);
      partitionIdx++;
    }
  }

  swap(arr, partitionIdx, end);

  return partitionIdx;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
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
