// 1295. Find Numbers with Even Number of Digits (6/10/2021)
// Runtime: 76 ms (69.96%) Memory: 39.39 MB (93.16%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(String(nums[i]).length % 2 === 0) count++;
    }
    
    return count;
};