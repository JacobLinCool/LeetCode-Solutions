// 977. Squares of a Sorted Array (2/22/53714)
// Runtime: 116 ms (70.03%) Memory: 45.66 MB (94.95%) 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    return nums.map((x) => x * x).sort((a, b) => a - b);
}