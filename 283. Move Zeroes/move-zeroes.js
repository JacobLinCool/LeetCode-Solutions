// 283. Move Zeroes (6/24/53718)
// Runtime: 92 ms (84.65%) Memory: 43.36 MB (94.89%) 

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