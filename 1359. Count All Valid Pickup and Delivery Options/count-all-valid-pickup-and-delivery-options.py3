# 1359. Count All Valid Pickup and Delivery Options (3/6/2022)
# Runtime: 42 ms (62.00%) Memory: 13.78 MB (89.34%) 

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
