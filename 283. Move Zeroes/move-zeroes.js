// 283. Move Zeroes (10/1/2021)
// Runtime: 92 ms (83.21%) Memory: 43.36 MB (93.73%) 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let ptr = 0,
        zeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) nums[ptr++] = nums[i];
        else zeros++;
    }
    for (let i = ptr; i < nums.length; i++) nums[i] = 0;
}