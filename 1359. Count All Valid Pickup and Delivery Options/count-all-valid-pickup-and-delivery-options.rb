# 1359. Count All Valid Pickup and Delivery Options (3/7/2022)
# Runtime: 48 ms (0.00%) Memory: 210.95 MB (0.00%) 

# @param {Integer} n
# @return {Integer}
def count_orders(n)
    ans = 1
    mod = 1000000007
    
    for i in 2..n
        ans *= i
        ans %= mod
    end
    
    for i in 2..n
        ans *= i * 2 - 1
        ans %= mod
    end
    
    return ans
end
