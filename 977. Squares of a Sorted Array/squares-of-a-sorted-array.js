// 977. Squares of a Sorted Array (9/29/2021)
// Runtime: 116 ms (69.82%) Memory: 45.66 MB (94.84%) 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    return nums.map((x) => x * x).sort((a, b) => a - b);
}