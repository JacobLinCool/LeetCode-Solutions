// 1894. Find the Student that Will Replace the Chalk (6/12/2021)
// Runtime: 100 ms (80.00%) Memory: 49.78 MB (88.00%) 

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = chalk.reduce((a,b) => a+b);
    k %= sum;
    for(let i = 0; i < chalk.length; i++) {
        k -= chalk[i];
        if(k < 0) return i;
    }
};