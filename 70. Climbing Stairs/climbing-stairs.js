// 70. Climbing Stairs (12/29/53742)
// Runtime: 78 ms (39.76%) Memory: 38.06 MB (92.87%) 

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    const dp = [1, 2];
    for (let i = 2; i < n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n - 1];
}