// 1893. Check if All the Integers in a Range Are Covered (12/10/53416)
// Runtime: 80 ms (49.37%) Memory: 38.79 MB (94.94%) 

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    let s = new Set();
    for(let i = left; i <= right; i++) s.add(i);
    
    for(let i = 0; i < ranges.length; i++) {
        for(let j = ranges[i][0]; j <= ranges[i][1]; j++)
            if(s.has(j)) s.delete(j);
    }
    
    return !s.size
};