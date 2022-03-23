// 198. House Robber (10/10/2021)
// Runtime: 104 ms (13.63%) Memory: 38.32 MB (91.69%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    return dp[nums.length - 1];
}