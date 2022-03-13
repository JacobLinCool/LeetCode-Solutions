// 977. Squares of a Sorted Array (9/29/2021)
// Runtime: 116 ms (76.58%) Memory: 45.66 MB (87.24%) 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    return nums.map((x) => x * x).sort((a, b) => a - b);
}