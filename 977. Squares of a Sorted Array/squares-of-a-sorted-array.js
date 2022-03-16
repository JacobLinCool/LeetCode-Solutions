// 977. Squares of a Sorted Array (9/29/2021)
// Runtime: 116 ms (75.63%) Memory: 45.66 MB (88.93%) 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    return nums.map((x) => x * x).sort((a, b) => a - b);
}