// 629. K Inverse Pairs Array (6/19/2021)
// Runtime: 96 ms (75.00%) Memory: 53.04 MB (75.00%) 

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    // dp[x][y] 代表在長 x 時有 y 個 inverse pair 的陣列有多少個
    let dp = Array.from(new Array(n+1), () => new Array(k+1).fill(0));
    
    // 如果都沒有 inverse pair 就只有可能是嚴格遞增的那種
    for(let i = 0; i <= n; i++) dp[i][0] = 1;
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= k; j++) {
            dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % (1e9 + 7);
            if(j >= i) dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + (1e9 + 7)) % (1e9 + 7);
        }
    }
    
    return dp[n][k];
};