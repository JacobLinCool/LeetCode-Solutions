// 746. Min Cost Climbing Stairs (6/7/2021)
// Runtime: 84 ms (49.51%) Memory: 41.04 MB (95.00%) 

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let one = 0, two = 0;
    for(let i = 2; i <= cost.length; i++) {
        [one, two] = [(one + cost[i - 1]) < (two + cost[i - 2]) ? (one + cost[i - 1]) : (two + cost[i - 2]), one]
    }
    return one;
};