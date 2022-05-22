// 326. Power of Three (11/27/53998)
// Runtime: 8 ms (93.06%) Memory: 6.42 MB (7.71%) 

bool isPowerOfThree(int n) {
    int64_t m = 3;
    
    while(m < n) {
        m *= 3;
    }
    
    return m == n || n == 1;
}