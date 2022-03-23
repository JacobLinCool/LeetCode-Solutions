// 1877. Minimize Maximum Pair Sum in Array (5/29/2021)
// Runtime: 656 ms (2.78%) Memory: 56.99 MB (51.74%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let max = 0;
    for(var i = 0; i < nums.length / 2; i++) {
        let sum = nums[i] + nums[nums.length - 1 - i];
        max = sum > max ? sum : max;
    }
    return max;
};