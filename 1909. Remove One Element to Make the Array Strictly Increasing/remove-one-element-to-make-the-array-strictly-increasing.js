// 1909. Remove One Element to Make the Array Strictly Increasing (6/26/2021)
// Runtime: 68 ms (81.65%) Memory: 39.05 MB (91.01%) 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    if(nums.length === 2) return true;
    
    let fall = -1;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] >= nums[i+1]) {
            if(fall === -1) fall = i;
            else return false;
        }
    }
    
    if(fall === -1) return true;
    if(fall === 0 || fall === nums.length - 2) return true;
    
    let passed = false;
    if(fall > 0) {
        if(nums[fall-1] < nums[fall+1]) passed = true;
    }
    if(!passed && fall + 2 < nums.length) {
        if(nums[fall] < nums[fall+2]) passed = true;
    }
    return passed;
};