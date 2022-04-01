// 871. Minimum Number of Refueling Stops (6/12/2021)
// Runtime: 96 ms (74.42%) Memory: 42.08 MB (93.02%) 

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    let n = stations.length;
    
    // dp[x] 代表經過 x 個加油站最遠可以到達的位置
    let dp = Array.from(new Array(n + 1), () => startFuel);

    
    for (let i = 0; i < n; i++) {
        for (let j = i; j >= 0 && dp[j] >= stations[i][0]; j--) {
            let dist = dp[j] + stations[i][1];
            dp[j + 1] = dist > dp[j + 1] ? dist : dp[j + 1];
        }
    }
    
    // 從經過少站到經過多站，輸出第一個能到達終點的站數
    for (let i = 0; i <= n; i++) {
        if (dp[i] >= target) return i;
    }
    
    return -1;
};