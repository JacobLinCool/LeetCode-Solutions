// 799. Champagne Tower (3/4/2022)
// Runtime: 3 ms (84.92%) Memory: 12.09 MB (5.02%) 

static inline double pour(double a) {
    return a > 1 ? (a - 1) / 2 : 0;
}

double champagneTower (int poured, int q_row, int q_glass) {
    int rows = q_row + 1;
    double* dp = (double*)calloc(rows * rows, sizeof(double));
    dp[0] = poured;
    
    for (int i = 1; i < rows; i++) {
        for (int j = 0; j <= i; j++) {
            if (j < i) {
                dp[rows * i + j] += pour(dp[rows * (i - 1) + j]);
            }
            if (j > 0) {
                dp[rows * i + j] += pour(dp[rows * (i - 1) + j - 1]);
            }
        }
    }
    
    return dp[rows * q_row + q_glass] < 1 ? dp[rows * q_row + q_glass] : 1;
}