// 70. Climbing Stairs (1/11/2022)
// Runtime: 0 ms (91.27%) Memory: 5.72 MB (0.00%) 

int climbStairs(int n) {
    if (n <= 2) {
        return n;
    }

    int64_t prev_1 = 2, prev_2 = 1, now = 0;

    for (int64_t i = 3; i <= n; i++) {
        now = prev_1 + prev_2;
        prev_2 = prev_1;
        prev_1 = now;
    }

    return now;
}