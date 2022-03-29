// 1029. Two City Scheduling (3/25/2022)
// Runtime: 65 ms (76.48%) Memory: 42.04 MB (77.00%) 

/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    return costs.reduce((sum, cost, i) => sum + cost[0 + (i >= costs.length / 2)], 0);
};
