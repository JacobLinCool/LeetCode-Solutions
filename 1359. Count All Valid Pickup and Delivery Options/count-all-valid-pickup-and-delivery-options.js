// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)
// Runtime: 59 ms (87.93%) Memory: 42.36 MB (46.72%) 

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
