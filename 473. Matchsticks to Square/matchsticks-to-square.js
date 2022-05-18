// 473. Matchsticks to Square (6/16/2021)
// Runtime: 84 ms (81.51%) Memory: 39.19 MB (94.96%) 

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const n = matchsticks.length;
    const sum = matchsticks.reduce((a, b) => a + b, 0);
    if (sum % 4 != 0) return false;
    matchsticks.sort((a, b) => a - b);
    return dfs(matchsticks, new Array(4).fill(0), matchsticks.length - 1, sum / 4);
};

var dfs = function (nums, sums, index, target) {
    if (index == -1) return true;
    for (let i = 0; i < 4; i++) {
        if (sums[i] + nums[index] > target || (i > 0 && sums[i] == sums[i - 1])) continue;
        sums[i] += nums[index];
        if (dfs(nums, sums, index - 1, target)) return true;
        sums[i] -= nums[index];
    }
    return false;
};