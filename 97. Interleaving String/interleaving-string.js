// 97. Interleaving String (6/3/2021)
// Runtime: 168 ms (2.55%) Memory: 42.42 MB (93.43%) 

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length, n = s2.length;

    if(m + n !== s3.length) return false;
    
    let dp = [];
    for(let i = 0; i <= m; i++) {
        let row = [];
        for(let j = 0; j <= n; j++) row.push(false);
        dp.push(row);
    }
    
    dp[0][0] = true;
    
    for(let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s3[i - 1] === s1[i - 1];
    }
    
    for(let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s3[j - 1] === s2[j - 1];
    }
    
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            dp[i][j] = (dp[i - 1][j] && s3[i - 1 + j] === s1[i - 1]) || (dp[i][j - 1] && s3[j - 1 + i] === s2[j - 1]);
        }
    }
    
    return dp[m][n];
};