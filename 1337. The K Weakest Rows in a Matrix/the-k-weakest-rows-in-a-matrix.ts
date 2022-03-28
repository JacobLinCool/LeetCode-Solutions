// 1337. The K Weakest Rows in a Matrix (3/27/2022)
// Runtime: 94 ms (46.34%) Memory: 44.96 MB (69.92%) 

function kWeakestRows(mat: number[][], k: number): number[] {
    const map = mat.map((row, idx) => [idx, row.filter(n => n).length]);
    map.sort((a, b) => a[1] - b[1]);
    return map.slice(0, k).map(x => x[0]);
};
