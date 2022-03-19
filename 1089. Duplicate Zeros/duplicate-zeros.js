// 1089. Duplicate Zeros (6/16/2021)
// Runtime: 76 ms (83.23%) Memory: 40.45 MB (84.86%) 

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i++;
        }
    }
};