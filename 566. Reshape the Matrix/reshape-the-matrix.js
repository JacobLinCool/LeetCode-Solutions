// 566. Reshape the Matrix (3/7/53481)
// Runtime: 100 ms (51.12%) Memory: 45.32 MB (49.96%) 

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let data = mat.reduce((a, b) => a.concat(b), []);
    if(data.length !== r * c) return mat;
    let result = [];
    for(let i = 0; i < r; i++) {
        let cols = [];
        for(let j = 0; j < c; j++) {
            cols.push(data[i*c + j]);
        }
        result.push(cols);
    }
    return result;
};