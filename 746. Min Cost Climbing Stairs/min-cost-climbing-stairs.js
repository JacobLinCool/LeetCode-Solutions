// 746. Min Cost Climbing Stairs (9/28/53402)
// Runtime: 84 ms (49.42%) Memory: 41.04 MB (94.53%) 

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