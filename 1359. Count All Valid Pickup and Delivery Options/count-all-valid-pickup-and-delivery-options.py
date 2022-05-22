# 1359. Count All Valid Pickup and Delivery Options (2/10/54148)
# Runtime: 24 ms (50.00%) Memory: 13.43 MB (55.88%) 

class Solution(object):
    def countOrders(self, n):
        """
        :type n: int
        :rtype: int
        """
        ans = 1
        mod = 1000000007
        
        for i in range(2, n+1):
            ans *= 2 * i - 1
            ans %= mod
        
        for i in range(2, n+1):
            ans *= i
            ans %= mod
        
        return ans
