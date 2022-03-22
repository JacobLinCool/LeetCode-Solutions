// 121. Best Time to Buy and Sell Stock (10/1/2021)
// Runtime: 156 ms (11.01%) Memory: 52.42 MB (4.07%) 

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let highests = [],
        highest = -1;
    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > highest) highest = prices[i];
        highests[i] = highest;
    }

    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        let profit = highests[i] - prices[i];
        if (profit > max) max = profit;
    }

    return max;
}