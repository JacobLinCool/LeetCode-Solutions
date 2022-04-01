// 1337. The K Weakest Rows in a Matrix (3/27/2022)
// Runtime: 100 ms (30.82%) Memory: 43.72 MB (88.31%) 

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(mat, k) {
    return mat
        .map((_, idx) => idx)
        .sort((a, b) => mat[a].lastIndexOf(1) - mat[b].lastIndexOf(1))
        .slice(0, k);
};
