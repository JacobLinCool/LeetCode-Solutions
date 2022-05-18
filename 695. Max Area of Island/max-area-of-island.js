// 695. Max Area of Island (6/2/2021)
// Runtime: 108 ms (50.88%) Memory: 40.80 MB (94.75%) 

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    const dfs = (i, j) => {
        if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === 1) {
            grid[i][j] = 0;
            return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1);
        } else return 0;
    }
    
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === 1) {
                const area = dfs(i,j);
                max = area > max ? area : max;
            }
        }
    }
    return max;
};