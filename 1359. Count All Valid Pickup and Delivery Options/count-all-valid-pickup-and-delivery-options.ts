// 1359. Count All Valid Pickup and Delivery Options (3/6/2022)
// Runtime: 60 ms (0.00%) Memory: 44.80 MB (0.00%) 

function countOrders(n: number): number {
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
