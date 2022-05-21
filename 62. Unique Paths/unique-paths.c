// 62. Unique Paths (5/20/2022)
// Runtime: 0 ms (93.83%) Memory: 6.04 MB (0.00%) 

int uniquePaths (int m, int n) {
    int32_t* counts = calloc(m * n, sizeof(int32_t));
    
    counts[0] = 1;
    for (size_t y = 0; y < m; y++) {
        for (size_t x = 0; x < n; x++) {
            if (!(x == 0 && y == 0)) {
                counts[y * n + x] = (x > 0 ? counts[y * n + x - 1] : 0) + (y > 0 ? counts[(y - 1) * n + x] : 0);
            }
        }
    }
    
    int32_t result = counts[m * n - 1];
    free(counts);
    return result;
}
