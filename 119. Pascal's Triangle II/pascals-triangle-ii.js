// 119. Pascal's Triangle II (11/14/2021)
// Runtime: 72 ms (61.35%) Memory: 38.84 MB (94.92%) 

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
    const row = Array.from({ length: rowIndex + 1 });
    row[0] = 1;
    
    for(let i = 1; i <= rowIndex; i++) {
        row[i] = 1;
        for(let j = i - 1; j >= 1; j--) {
            row[j] += row[j - 1];
        }
    }
    
    return row;
};