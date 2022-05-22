// 322. Coin Change (8/6/54356)
// Runtime: 46 ms (46.27%) Memory: 10.27 MB (9.77%) 

int coinChange (int* coins, int coinsSize, int amount) {
    int* dp = malloc((amount + 1) * sizeof(int));
    for (int i = 0; i <= amount; i++) {
        dp[i] = 99999;
    }
    
    dp[0] = 0;
    for (int i = 0; i <= amount; i++) {
        for (int j = 0; j < coinsSize; j++) {
            if (i >= coins[j]) {
                dp[i] = dp[i] < 1 + dp[i - coins[j]] ? dp[i] : 1 + dp[i - coins[j]];
            }
        }
    }
    
    return (dp[amount] < 99999) ? dp[amount] : -1; 
}
