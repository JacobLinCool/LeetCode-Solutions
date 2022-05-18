// 120. Triangle (10/10/2021)
// Runtime: 68 ms (82.22%) Memory: 39.74 MB (94.61%) 

/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    if (triangle.length === 0) return 0;
    if (triangle.length === 1) return triangle[0][0];
    let dp = triangle[triangle.length - 1].slice();
    for (let i = triangle.length - 2; i >= 0; i--) for (let j = 0; j < triangle[i].length; j++) dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    return dp[0];
}