// 74. Search a 2D Matrix (10/2/2021)
// Runtime: 95 ms (27.34%) Memory: 39.58 MB (89.79%) 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === target) return true;
            if(matrix[i][j] > target) return false;
        }
    }
    return false;
};