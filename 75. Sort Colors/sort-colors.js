// 75. Sort Colors (1/11/53841)
// Runtime: 72 ms (61.00%) Memory: 39.01 MB (94.75%) 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    const length = nums.length;
    let count = [0, 0, 0];
    for(let i = 0; i < length; i++) count[nums[i]]++;
    let idx = 0;
    for(let i = 0; i < 3; i++) 
        for(let j = 0; j < count[i]; j++) 
            nums[idx++] = i;
};
