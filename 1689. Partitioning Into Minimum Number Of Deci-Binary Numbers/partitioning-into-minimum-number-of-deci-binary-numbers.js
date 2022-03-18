// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers (5/27/2021)
// Runtime: 84 ms (88.68%) Memory: 43.05 MB (92.14%) 

/**
 * @param {string} n
 * @return {number}
 */


var minPartitions = function (n) {
    // 這題就是找字串中最大的數就好，代表同位置最多需幾個 1
    
    // 1. 最簡單的方法
    // return Math.max(...n.split(""));
    
    // 2. 高速的方法
    for (var i = 9; i > 1; i--) 
        if (n.includes(i)) return i;
    return 1;
    
    /* 3. 節省記憶體的方法
    let max = 1;
    for (let num of n) {
        if (num > max) max = num;
        if (max == 9) break;
    }
    return max;
    */
};
