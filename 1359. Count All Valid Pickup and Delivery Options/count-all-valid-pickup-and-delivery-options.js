// 1359. Count All Valid Pickup and Delivery Options (1/31/54148)
// Runtime: 59 ms (84.00%) Memory: 42.36 MB (48.00%) 

/**
 * @param {number} n
 * @return {number}
 */
function countOrders(n) {
    let ans = 1;
    const mod = 1000000007;
    
    for (let i = 1; i <= n; i++) {
        ans *= 2 * i - 1;
        ans %= mod;
    }
    
    for (let i = 1; i <= n; i++) {
        ans *= i;
        ans %= mod;
    }
    
    return ans;
};
