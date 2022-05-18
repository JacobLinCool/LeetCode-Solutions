// 1690. Stone Game VII (12/27/2021)
// Runtime: 52 ms (94.28%) Memory: 10.40 MB (60.00%) 

int stoneGameVII(int stones[], int stonesSize){
    // dp[a][b] 代表石頭第一個位置是 a 最後一個位置是 b 的差
    int dp[stonesSize][stonesSize];
    memset(dp, 0, sizeof(dp));
    
    for(int i = stonesSize - 1; i >= 0; i--) {
        // sum 就是區段的分數總和
        int sum = stones[i];
        for(int j = i + 1; j < stonesSize; j++) {
            sum += stones[j];
            
            // 移除第一個的差，多了一個元素，所以把上次的反轉扣除
            int remove_first = sum - stones[i] - dp[i + 1][j];
            // 移除最後一個的差，多了一個元素，所以把上次的反轉扣除
            int remove_last = sum - stones[j] - dp[i][j - 1];
            
            // Alex 必定會選較大的那個
            dp[i][j] = remove_first > remove_last ? remove_first : remove_last;
        }
    }
    
    // 回傳全區段的情形下的差
    return dp[0][stonesSize - 1];
}