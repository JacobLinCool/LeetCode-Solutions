// 378. Kth Smallest Element in a Sorted Matrix (7/8/2021)
// Runtime: 100 ms (70.74%) Memory: 54.37 MB (5.08%) 

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