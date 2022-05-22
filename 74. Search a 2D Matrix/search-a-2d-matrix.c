// 74. Search a 2D Matrix (4/13/54212)
// Runtime: 0 ms (92.69%) Memory: 6.34 MB (17.31%) 

bool searchMatrix (int** matrix, int matrix_size, int* matrix_col_size, int target) {
    int row = 0;
    for (int i = 0; i < matrix_size; i++) {
        if (matrix[i][0] <= target) {
            row = i;
        }
    }
    
    for (int i = 0; i < *matrix_col_size; i++) {
        if (matrix[row][i] == target) {
            return true;
        }
    }
    
    return false;
}
