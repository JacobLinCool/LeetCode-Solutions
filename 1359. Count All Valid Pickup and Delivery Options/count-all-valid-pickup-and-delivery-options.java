// 1359. Count All Valid Pickup and Delivery Options (2/9/54148)
// Runtime: 0 ms (94.99%) Memory: 41.28 MB (35.76%) 

class Solution {
    public int countOrders(int n) {
        long ans = 1;
        long mod = 1000000007;
        
        for (int i = 2; i <= n; i++) {
            ans *= 2 * i - 1;
            ans %= mod;
        }
        
        for (int i = 2; i <= n; i++) {
            ans *= i;
            ans %= mod;
        }
        
        return (int)ans;
    }
}