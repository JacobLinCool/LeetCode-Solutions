// 89. Gray Code (7/1/2021)
// Runtime: 112 ms (78.00%) Memory: 48.51 MB (76.00%) 

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let result = [0];
    
    for(let i = 0; i < n; i++) {
        for(let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] | 1 << i);
        }
    }
    
    return result;
};