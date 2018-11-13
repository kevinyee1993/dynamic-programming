// 16.6
class sortNode {
  constructor(value, origin) {
    this.value = value;
    this.origin = origin;
  }
}


// O(nlog(n)) time -> which is improvement over O(nm) time
// O(n) space
function smallestDifference(arr1, arr2) {
  let combinedArrs = [];
  const convertedArr1 = createSortNode(arr1, 1);
  const convertedArr2 = createSortNode(arr2, 2);
  let smallest = Infinity;

  combinedArrs = combinedArrs.concat(convertedArr1).concat(convertedArr2);
  // sort combinedArrs depending on the values
  // sort takes O(nlog(n)) time
  quickSort(combinedArrs, 0, combinedArrs.length - 1);

  // reverse that thing (descending order)
  combinedArrs = combinedArrs.reverse();
  console.log(combinedArrs);

  // go down the array -> O(n)
  for(let i = 0; i < combinedArrs.length - 1; i++) {
    let currNode = combinedArrs[i];
    let nextNode = combinedArrs[i + 1];

    // keep track of smallest difference which would start at Infinity
    // if currNode and prevNode are different, get their difference
    if(currNode.origin !== nextNode.origin) {
      let currDiff = currNode.value - nextNode.value;
      if(currDiff < smallest) {
        smallest = currDiff;
      }
    }
  }

  // compare their difference with smallest difference
  // return smallest difference at the end
  return smallest;

}

// O(n) time and space
function createSortNode(arr, origin) {
  const convertedArr = [];

  for(let i = 0; i < arr.length; i++) {
    let currSortNode = new sortNode(arr[i], origin);
    convertedArr.push(currSortNode);
  }

  return convertedArr;
}

function quickSort(arr, left, right) {
  if(left >= right) {
    return arr;
  }

  let pivot = arr[right];
  let partitionIndex = partition(arr, left, right, pivot);

  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);
}

function partition(arr, left, right, pivot) {
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(arr[i].value < pivot.value) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, right);
  return partitionIndex;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

let test = [1,2,3,4,5];
console.log(smallestDifference([1,3,15,11,2],[23,127,235,19,8]));
