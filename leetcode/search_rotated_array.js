var search = function(nums, target) {
    if(nums.length <= 0) {
        return -1;
    }

    return modBinarySearch(nums, target, 0, nums.length - 1);
};

function modBinarySearch(nums, target, leftBound, rightBound) {
    let midPoint = Math.floor((leftBound + rightBound) / 2);
    let mid = nums[midPoint];

    console.log(mid, target, nums[leftBound], nums[rightBound]);

    if(mid === target) {
        return midPoint;
    } else if (rightBound - leftBound <= 0) {
        return -1;
    }

    // if(target < mid && nums[leftBound] < target && nums[rightBound] < target) {
    //   return modBinarySearch(nums, target, leftBound, midPoint - 1);
    // }
    //
    // if(target < mid && nums[leftBound] > target && nums[rightBound] > target) {
    //   return modBinarySearch(nums, target, leftBound, midPoint - 1);
    // }
    //
    // if(target > mid && nums[leftBound] < target && nums[rightBound] < target) {
    //   return modBinarySearch(nums, target, midPoint + 1, rightBound);
    // }
    //
    // if(target > mid && nums[leftBound] > target && nums[rightBound] > target) {
    //   return modBinarySearch(nums, target, midPoint + 1, rightBound);
    // }
    //
    // if(target < mid && nums[leftBound] > target) {
    //     return modBinarySearch(nums, target, midPoint + 1, rightBound);
    // }

    if(target < mid && nums[leftBound] <= target) {
        return modBinarySearch(nums, target, leftBound, midPoint - 1);
    }

    if(target > mid && nums[rightBound] > target) {
        return modBinarySearch(nums, target, midPoint + 1, rightBound);
    }

    if(target > mid && nums[rightBound] <= target) {
        return modBinarySearch(nums, target, leftBound, midPoint - 1);
    }

}

let arr = [4,5,6,7,8,1,2,3];
console.log(search(arr, 8));
