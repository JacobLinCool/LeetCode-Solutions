// 53. Maximum Subarray (9/29/2021)
// Runtime: 88 ms (76.74%) Memory: 48.77 MB (91.45%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let max = nums[0],
        current = nums[0];
    nums.shift();
    for (const n of nums) {
        current = Math.max(n, current + n);
        max = Math.max(max, current);
    }
    return max;
}