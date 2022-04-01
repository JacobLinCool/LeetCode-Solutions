// 48. Rotate Image (11/14/2021)
// Runtime: 68 ms (69.42%) Memory: 39.11 MB (94.69%) 

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    let size = matrix.length,
        level = 0;
    
    while(size > 0) {
        for(let i = level; i < level + size - 1; i++) {
            const top = matrix[level][i]; // go right
            const right = matrix[i][level + size - 1]; // go down
            const bottom = matrix[level + size - 1][level + size - 1 - (i - level)]; // go left
            const left = matrix[level + size - 1 - (i - level)][level]; // go up
            
            matrix[level][i] = left;
            matrix[i][level + size - 1] = top;
            matrix[level + size - 1][level + size - 1 - (i - level)] = right;
            matrix[level + size - 1 - (i - level)][level] = bottom;
        }
        
        level++;
        size -= 2;
    }
};
