// 1. Two Sum (5/27/2021)
// Runtime: 72 ms (84.24%) Memory: 39.42 MB (93.72%) 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let table = {};
    
    for(var i = 0; i < nums.length; i++) {
        if(table[nums[i]] >= 0) {
            return [table[nums[i]], i];
        }
        
        table[target - nums[i]] = i;
    }
};