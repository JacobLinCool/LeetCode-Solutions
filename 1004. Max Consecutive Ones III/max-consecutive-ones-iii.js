// 1004. Max Consecutive Ones III (6/29/2021)
// Runtime: 88 ms (65.41%) Memory: 43.46 MB (94.81%) 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let position = 0, flip = 0, max = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) flip++;
        
        while(flip > k) {
            if(nums[position] === 0) flip--;
            position++;
        }
        
        max = Math.max(max, i - position + 1);
    }
    
    return max;
};