// 70. Climbing Stairs (10/10/2021)
// Runtime: 78 ms (47.01%) Memory: 38.06 MB (91.03%) 

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    const dp = [1, 2];
    for (let i = 2; i < n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n - 1];
}