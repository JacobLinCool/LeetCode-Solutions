// 795. Number of Subarrays with Bounded Maximum (6/17/2021)
// Runtime: 76 ms (84.21%) Memory: 42.82 MB (94.74%) 

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    // 儲存合法子陣列數、區間左界、區間右界
    let count = 0, left_index = -1, right_index = -1;
    
    // 遍歷 nums
    for(let i = 0; i < nums.length; i++) {
        // 該數超過最大可容忍值，截斷區間
        if(nums[i] > right) left_index = i;
        // 該數不小於最小可容忍值，向右推移區間右界
        if(nums[i] >= left) right_index = i;
        // 加上固定區間右界來看所有合法子陣列數
        count += right_index - left_index;
    }
    
    return count;
};