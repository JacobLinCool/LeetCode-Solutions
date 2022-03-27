// 35. Search Insert Position (9/29/2021)
// Runtime: 76 ms (54.49%) Memory: 39.87 MB (93.39%) 

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