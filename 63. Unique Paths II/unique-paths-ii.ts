// 63. Unique Paths II (2/22/54352)
// Runtime: 115 ms (25.62%) Memory: 45.34 MB (12.40%) 

function uniquePathsWithObstacles(obstacles: number[][]): number {
    const rows = obstacles.length;
    const cols = obstacles[0].length;
    const counts: number[][] = Array
        .from(
            { length: rows }, 
            () => Array.from({ length: cols }, () => 0)
        );
    
    counts[0][0] = obstacles[0][0] === 0 ? 1 : 0;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (counts[y][x] === 0 && obstacles[y][x] === 0) {
                counts[y][x] = (y > 0 ? counts[y - 1][x] : 0) + (x > 0 ? counts[y][x - 1] : 0);
            }
        }
    }
    
    return counts[rows - 1][cols - 1];
};
