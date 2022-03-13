// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)
// Runtime: 0 ms (93.80%) Memory: 5.63 MB (0.00%) 

int countOrders (int n) {
    int64_t ans = 1, fact = 1;
    int64_t mod = 1000000007;
    
    for (int i = 1; i <= n; i++) {
        fact *= i;
        fact %= mod;
    }
    
    for (int i = 1; i <= n; i++) {
        ans *= 2 * i - 1;
        ans %= mod;
    }
    
    return (ans * fact) % mod;
}
