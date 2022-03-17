// 136. Single Number (10/12/2021)
// Runtime: 72 ms (84.85%) Memory: 41.32 MB (90.32%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) result ^= nums[i];
    return result;
}