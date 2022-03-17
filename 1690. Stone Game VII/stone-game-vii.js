// 1690. Stone Game VII (6/11/2021)
// Runtime: 592 ms (22.58%) Memory: 64.59 MB (77.42%) 

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    const n = stones.length;
    // dp[a][b] 代表石頭第一個位置是 a 最後一個位置是 b 的差
    let dp = Array.from(new Array(n), () => new Array(n).fill(0));
    
    for(let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for(let j = i; j < n; j++) {
            sum += stones[j];
            
            if(i === j) continue;
            
            let remove_first = sum - stones[i] - dp[i + 1][j];
            let remove_last = sum - stones[j] - dp[i][j - 1];
            
            dp[i][j] = remove_first > remove_last ? remove_first : remove_last;
        }
    }
    
    console.log(dp)
    return dp[0][n - 1];
};