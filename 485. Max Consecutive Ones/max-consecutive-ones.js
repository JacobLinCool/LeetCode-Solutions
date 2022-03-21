// 485. Max Consecutive Ones (6/10/2021)
// Runtime: 84 ms (65.29%) Memory: 41.10 MB (90.76%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        while (i < nums.length && nums[i] === 0) i++;
        let zone_start = i;
        
        while (i < nums.length && nums[i] === 1) i++;
        let zone_end = i;
        
        let zone_length = zone_end - zone_start;
        max = zone_length > max ? zone_length : max;
    }
    return max;
};