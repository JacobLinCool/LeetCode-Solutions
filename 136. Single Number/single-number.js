// 136. Single Number (6/18/53748)
// Runtime: 72 ms (83.50%) Memory: 41.32 MB (94.91%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) result ^= nums[i];
    return result;
}