// 733. Flood Fill (10/4/2021)
// Runtime: 80 ms (79.46%) Memory: 40.84 MB (90.49%) 

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    const old = image[sr][sc];
    if (old === newColor) return image;
    const visited = new Set();
    let q = [[sr, sc]];
    while (q.length) {
        let nq = [];
        for (let i = 0; i < q.length; i++) {
            if (!visited.has(q[i])) {
                image[q[i][0]][q[i][1]] = newColor;
                visited.add(q[i]);
                if (q[i][0] > 0 && image[q[i][0] - 1][q[i][1]] === old) nq.push([q[i][0] - 1, q[i][1]]);
                if (q[i][0] < image.length - 1 && image[q[i][0] + 1][q[i][1]] === old) nq.push([q[i][0] + 1, q[i][1]]);
                if (q[i][1] > 0 && image[q[i][0]][q[i][1] - 1] === old) nq.push([q[i][0], q[i][1] - 1]);
                if (q[i][1] < image[0].length - 1 && image[q[i][0]][q[i][1] + 1] === old) nq.push([q[i][0], q[i][1] + 1]);
            }
        }
        q = nq;
    }
    return image;
}