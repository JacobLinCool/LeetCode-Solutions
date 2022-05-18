// 1029. Two City Scheduling (3/25/2022)
// Runtime: 111 ms (25.16%) Memory: 44.16 MB (76.13%) 

function twoCitySchedCost(costs: number[][]): number {
    costs.sort((a: number[], b: number[]) => (a[0] - a[1]) - (b[0] - b[1]));
    return costs.reduce((sum, cost, i) => sum + cost[i >= costs.length / 2 ? 1 : 0], 0);
};
