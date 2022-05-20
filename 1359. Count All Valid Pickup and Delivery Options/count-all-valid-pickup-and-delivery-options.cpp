// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)
// Runtime: 0 ms (94.81%) Memory: 5.84 MB (74.37%) 

class Solution {
public:
    int countOrders(int n) {
        int64_t ans = 1;
        int64_t mod = 1000000007;
        
        for (int i = 2; i <= n; i++) {
            ans *= 2 * i - 1;
            ans %= mod;
        }
        
        for (int i = 2; i <= n; i++) {
            ans *= i;
            ans %= mod;
        }
        
        return ans;
    }
};