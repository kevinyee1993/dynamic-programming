// O(n) space and O(nlog(n)) time
// library javascript sort does it by first digit so 8 would be bigger than 10
function findKthLargest(nums, k) {
  // console.log(nums);
  // built in numeric sort
  nums.sort((a, b) => {
    return a - b;}
    // return b - a;}
  );

  console.log(nums);
  return nums[nums.length - k];
}


// just practicing quicksort
function quickSort(nums) {

}




// let test = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
let test = [5,4,3,2,1];
// console.log(getUnique(test));
console.log(findKthLargest(test, 2));
