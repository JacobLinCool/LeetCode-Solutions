// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)
// Runtime: 31 ms (57.10%) Memory: 25.25 MB (54.10%) 

public class Solution {
    public int CountOrders(int n) {
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