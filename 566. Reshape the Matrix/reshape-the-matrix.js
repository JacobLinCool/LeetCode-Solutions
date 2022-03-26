// 566. Reshape the Matrix (7/6/2021)
// Runtime: 100 ms (60.76%) Memory: 45.32 MB (48.23%) 

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