// 1696. Jump Game VI (6/9/2021)
// Runtime: 144 ms (67.50%) Memory: 52.20 MB (92.50%) 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length;
    
    // dp 陣列用來存到 i 處最大分數
    let dp = new Array(n);
    // queue 用來存候選位置
    let queue = [];
    
    // 初始化，分別放入 i = 0 的值與位置
    dp[0] = nums[0];
    queue.push(0);
    
    // 遍歷 nums
    for (let i = 1; i < n; i++) {
        // 把 queue 中超過可到達範圍的位置移除
        while (queue.length && queue[0] < i - k) queue.shift();
        
        // i 位置的最大分數會是 queue 中離 i 最遠的最大分數加上 i 位置的分數
        dp[i] = dp[queue[0]] + nums[i];
        
        // 把 queue 中位置的最大分數比 i 位置的最大分數小的位置移除
        while (queue.length && dp[i] >= dp[queue[queue.length - 1]]) queue.pop();
        
        // 把 i 位置放入 queue
        queue.push(i);
    }
    
    // 回傳到最後一個位置的最大分數
    return dp[n - 1];
};