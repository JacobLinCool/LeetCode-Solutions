// 994. Rotting Oranges (10/6/2021)
// Runtime: 92 ms (71.47%) Memory: 41.75 MB (77.10%) 

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
    const fresh = new Set();
    const rotten = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) rotten.push([i, j]);
            else if (grid[i][j] === 1) fresh.add(i * 100 + j);
        }
    }

    if (rotten.length === 0) return fresh.size ? -1 : 0;

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    let minutes = -1;
    while (rotten.length) {
        const num = rotten.length;
        for (let i = 0; i < num; i++) {
            const [y, x] = rotten.shift();
            for (let [dy, dx] of directions) {
                const [ny, nx] = [y + dy, x + dx];
                if (ny < 0 || ny >= grid.length || nx < 0 || nx >= grid[0].length || grid[ny][nx] !== 1) continue;
                grid[ny][nx] = 2;
                fresh.delete(ny * 100 + nx);
                rotten.push([ny, nx]);
            }
        }
        minutes++;
    }

    return fresh.size ? -1 : minutes;
}