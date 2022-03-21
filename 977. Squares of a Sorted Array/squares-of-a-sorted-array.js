// 977. Squares of a Sorted Array (9/29/2021)
// Runtime: 116 ms (74.68%) Memory: 45.66 MB (91.04%) 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    return nums.map((x) => x * x).sort((a, b) => a - b);
}