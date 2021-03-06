// 542. 01 Matrix (4/20/53733)
// Runtime: 188 ms (70.45%) Memory: 48.32 MB (94.90%) 

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(mat) {
    let queue = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) queue.push([i, j]);
            else mat[i][j] = null;
        }
    }

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    let level = 1;
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const [y, x] = queue.shift();

            for (let [dy, dx] of directions) {
                let ny = y + dy;
                let nx = x + dx;
                if (ny < 0 || ny >= mat.length || nx < 0 || nx >= mat[0].length || mat[ny][nx] !== null) continue;
                mat[ny][nx] = level;
                queue.push([ny, nx]);
            }
        }
        level++;
    }

    return mat;
}