// 338. Counting Bits (3/1/2022)
// Runtime: 44 ms (86.80%) Memory: 10.69 MB (0.00%) 

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
typedef int32_t i32;

i32* countBits (i32 n, i32* size) {
    *size = n + 1;
    
    i32* results = malloc(*size * sizeof(i32));
    for (i32 i = 0; i <= n; i++) {
        results[i] = __builtin_popcount(i);
    }
    
    return results;
}
