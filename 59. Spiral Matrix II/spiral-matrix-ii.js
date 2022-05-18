// 59. Spiral Matrix II (11/14/2021)
// Runtime: 76 ms (19.43%) Memory: 38.85 MB (94.65%) 

/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
    const matrix = Array.from({ length: n }).map(() => Array.from({ length: n }));
    
    let x = 0, y = 0, direction = 0, level = 0;
    for(let i = 1; i <= n*n; i++) {
        matrix[y][x] = i;
        
        if(direction === 0 && x >= n - level - 1) direction = 1;
        else if(direction === 1 && y >= n - level - 1) direction = 2;
        else if(direction === 2 && x <= level) direction = 3;
        else if(direction === 3 && y <= level + 1) {
            level++;
            direction = 0;
        }
        
        if(direction === 0) x++;
        else if(direction === 1) y++;
        else if(direction === 2) x--;
        else if(direction === 3) y--;
    }
    
    return matrix;
};
