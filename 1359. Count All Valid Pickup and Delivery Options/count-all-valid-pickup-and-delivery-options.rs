// 1359. Count All Valid Pickup and Delivery Options (2/7/54148)
// Runtime: 1 ms (0.00%) Memory: 2.06 MB (0.00%) 

impl Solution {
    pub fn count_orders(n: i32) -> i32 {
        let mut ans: i64 = 1;
        let modulo: i64 = 1000000007;
    
        for i in 1i64..=(n as i64) {
            ans *= 2 * i - 1;
            ans %= modulo;
        }

        for i in 1i64..=(n as i64) {
            ans *= i;
            ans %= modulo;
        }

        return ans as i32;
    }
}
