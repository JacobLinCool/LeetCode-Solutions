// 1337. The K Weakest Rows in a Matrix (5/19/54204)
// Runtime: 94 ms (51.01%) Memory: 44.96 MB (68.53%) 

function kWeakestRows(mat: number[][], k: number): number[] {
    const map = mat.map((row, idx) => [idx, row.filter(n => n).length]);
    map.sort((a, b) => a[1] - b[1]);
    return map.slice(0, k).map(x => x[0]);
};
