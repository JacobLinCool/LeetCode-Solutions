// 136. Single Number (10/12/2021)
// Runtime: 72 ms (83.25%) Memory: 41.32 MB (94.79%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) result ^= nums[i];
    return result;
}