# 1359. Count All Valid Pickup and Delivery Options (2/10/54148)
# Runtime: 42 ms (58.80%) Memory: 13.78 MB (91.90%) 

class Solution:
    def countOrders(self, n: int) -> int:
        ans = 1
        mod = 1000000007
        
        for i in range(2, n+1):
            ans *= 2 * i - 1
            ans %= mod
        
        for i in range(2, n+1):
            ans *= i
            ans %= mod
        
        return ans
