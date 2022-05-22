// 169. Majority Element (8/30/53764)
// Runtime: 72 ms (78.09%) Memory: 41.25 MB (94.74%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let majority = nums[0];
    let vote = 1;
    for(let i = 1; i < nums.length; i++) {
        if(!vote) majority = nums[i];
        vote += nums[i] === majority ? 1 : -1;
    }
    return majority;
};