// 1383. Maximum Performance of a Team (6/8/2021)
// Runtime: 484 ms (0.00%) Memory: 69.29 MB (33.33%) 

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    // 把 engineers 依照 efficiency 遞減排序
    let engineers = [];
    for(let i = 0; i < n; i++) {
        engineers.push({ speed: speed[i], efficiency: efficiency[i] });
    }
    engineers.sort((a,b) => b.efficiency - a.efficiency);
    
    let highest_speeds = new MinPriorityQueue();
    
    let max_performance = BigInt(0), team_speed = 0;
    for(let i = 0; i < n; i++) {
        highest_speeds.enqueue(engineers[i].speed);
        team_speed += engineers[i].speed;
        if (highest_speeds.size() > k) {
            team_speed -= highest_speeds.dequeue().element;
        }
        
        let performance = BigInt(engineers[i].efficiency) * BigInt(team_speed);
        max_performance = performance > max_performance ? performance : max_performance;
    }
    
    return max_performance % BigInt(1e9 + 7);
};