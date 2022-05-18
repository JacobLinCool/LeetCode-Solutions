// 576. Out of Boundary Paths (6/24/2021)
// Runtime: 100 ms (88.89%) Memory: 46.43 MB (88.89%) 

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let dp = [];
    for(let move = 0; move <= maxMove; move++) {
        dp.push([]);
        for(let row = 0; row < m; row++) {
            dp[move].push([]);
            for(let col = 0; col < n; col++) {
                dp[move][row].push(0);
            }
        }
    }
    
    for(let move = 1; move <= maxMove; move++) {
        for(let row = 0; row < m; row++) {
            for(let col = 0; col < n; col++) {
                let up = (row !== 0) ? dp[move-1][row-1][col] : 1;
                let down = (row !== m-1) ? dp[move-1][row+1][col] : 1;
                let left = (col !== 0) ? dp[move-1][row][col-1] : 1;
                let right = (col !== n-1) ? dp[move-1][row][col+1] : 1;
                let sum = up + down + left + right;
                dp[move][row][col] = sum % (1e9+7);
            }
        }
    }
    
    return dp[maxMove][startRow][startColumn];
};