// 118. Pascal's Triangle (6/21/2021)
// Runtime: 64 ms (80.48%) Memory: 38.84 MB (77.09%) 

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