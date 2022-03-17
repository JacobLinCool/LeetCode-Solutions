// 326. Power of Three (1/11/2022)
// Runtime: 8 ms (93.14%) Memory: 6.42 MB (0.00%) 

bool isPowerOfThree(int n) {
    int64_t m = 3;
    
    while(m < n) {
        m *= 3;
    }
    
    return m == n || n == 1;
}