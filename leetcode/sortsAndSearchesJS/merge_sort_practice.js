// O(nlogn) time and space
function mergeSort(array) {
  // Write your code here.
	if(array.length <= 1) {
		return array;
	}

	let midIdx = Math.floor(array.length / 2);

	let leftArr = array.slice(0, midIdx);
	let rightArr = array.slice(midIdx, array.length);

  console.log(leftArr, rightArr);

	return mergeSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeSortedArrays(leftArr, rightArr) {
  let mergedArr = [];

  while(leftArr.length > 0 && rightArr.length > 0) {
    if(leftArr[0] <= rightArr[0]) {
      mergedArr.push(leftArr.shift());
    } else {
      mergedArr.push(rightArr.shift());
    }
  }

  mergedArr.push(...leftArr);
  mergedArr.push(...rightArr);

  return mergedArr;
}

console.log(mergeSort([5,1,643,2,53,1,97,5,8]));
