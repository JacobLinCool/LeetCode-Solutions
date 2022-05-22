// 118. Pascal's Triangle (11/26/53440)
// Runtime: 64 ms (74.65%) Memory: 38.84 MB (94.11%) 

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];
    
    for(let row = 0; row < numRows; row++) {
        let store = [1];
        for(let column = 0; column < row - 1; column++) {
            store.push(triangle[row - 1][column] + triangle[row - 1][column + 1]);
        }
        if(row) store.push(1);
        triangle.push(store);
    }
    
    return triangle;
};