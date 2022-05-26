// 191. Number of 1 Bits (5/8/54369)
// Runtime: 3 ms (40.72%) Memory: 5.43 MB (38.83%) 

int hammingWeight (uint32_t n) {
    uint8_t count = 0;
    
    while (n) {
        n = n & (n - 1);
        count++;
    }
    
    return count;
}
