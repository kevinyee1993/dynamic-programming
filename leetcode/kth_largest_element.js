// O(n) space and O(nlog(n)) time
// library javascript sort does it by first digit so 8 would be bigger than 10
function findKthLargest(nums, k) {
  // console.log(nums);
  // built in numeric sort
  // nums.sort((a, b) => {
  //   return a - b;}
  //   // return b - a;}
  // );

  nums = mergeSort(nums);
  return nums[nums.length - k];
}


// just practicing quicksort
function quickSort(nums) {
  if(nums === null) {
    return null;
  }

  if(nums.length <= 1) {
    return nums;
  }

  let partition = nums.shift();
  let left =  nums.filter(el => el <= partition);
  let right =  nums.filter(el => el > partition);

  return quickSort(left).concat([partition]).concat(quickSort(right));
}


// practice using merge sort without references
function mergeSort(nums) {
  if(nums === null) {
    return null;
  }

  if(nums.length <= 1) {
    return nums;
  }
  let midPoint = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, midPoint));
  let right = mergeSort(nums.slice(midPoint, nums.length));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let answer = [];

  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] > arr2[0]) {
      answer.push(arr2.shift());
    } else {
      answer.push(arr1.shift());
    }
  }

  return answer.concat(arr1).concat(arr2);
}




// let test = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
let test = [5,4,3,2,1];
// console.log(getUnique(test));
console.log(findKthLargest(test, 2));
