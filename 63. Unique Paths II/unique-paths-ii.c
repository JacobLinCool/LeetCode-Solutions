// 63. Unique Paths II (5/20/2022)
// Runtime: 8 ms (21.57%) Memory: 6.12 MB (39.22%) 

int uniquePathsWithObstacles (int** obstacles, int rows, int* cols) {
    uint32_t* counts = calloc(rows * *cols, sizeof(uint32_t));
    
    counts[0] = !obstacles[0][0];
    for (size_t y = 0; y < rows; y++) {
        for (size_t x = 0; x < *cols; x++) {
            if (!(x == 0 && y == 0) && !obstacles[y][x]) {
                counts[y * *cols + x] = (x > 0 ? counts[y * *cols + x - 1] : 0) + (y > 0 ? counts[(y - 1) * *cols + x] : 0);
            }
        }
    }
    
    return counts[rows * *cols - 1];
}
