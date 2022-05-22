// 1877. Minimize Maximum Pair Sum in Array (8/17/53378)
// Runtime: 656 ms (1.72%) Memory: 56.99 MB (49.42%) 

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