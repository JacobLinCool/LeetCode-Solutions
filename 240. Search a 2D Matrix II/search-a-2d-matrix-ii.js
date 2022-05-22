// 240. Search a 2D Matrix II (6/8/53841)
// Runtime: 300 ms (92.06%) Memory: 42.45 MB (94.54%) 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    const h = matrix.length;
    const w = matrix[0].length;
    
    let i = 0, j = w - 1;
    while (i < h && j >= 0) {
        let val = matrix[i][j]
        if (val === target) return true;
        else {
            if (val > target) j--;
            else i++;
        }
    }
    
    return false;
};
