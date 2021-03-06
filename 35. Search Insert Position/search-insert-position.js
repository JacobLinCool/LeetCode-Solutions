// 35. Search Insert Position (12/21/53712)
// Runtime: 76 ms (47.96%) Memory: 39.87 MB (94.58%) 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return left;
}