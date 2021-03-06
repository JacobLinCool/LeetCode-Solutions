// 69. Sqrt(x) (3/11/53959)
// Runtime: 4 ms (58.05%) Memory: 5.47 MB (80.99%) 

int mySqrt(int64_t x) {
    // 左界為 l，右界為 r
    int64_t l = 0, r = x;
    
    // 二分搜尋，直到 l 超過 r
    while(l <= r) {
        // 取中間值
        int64_t m = l + (r - l) / 2;
        
        // 如果測試值比 x 小則往上找，反之往下找
        if (m * m <= x) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    
    return r;
}