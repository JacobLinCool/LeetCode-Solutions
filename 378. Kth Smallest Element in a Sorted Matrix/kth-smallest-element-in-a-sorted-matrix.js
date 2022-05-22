// 378. Kth Smallest Element in a Sorted Matrix (1/10/53487)
// Runtime: 100 ms (66.93%) Memory: 54.37 MB (5.84%) 

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let nums = matrix.reduce((a,b) => a.concat(b), []);
    nums.sort((a,b) => a-b);
    return nums[k-1];
};