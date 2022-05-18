// 1894. Find the Student that Will Replace the Chalk (6/12/2021)
// Runtime: 100 ms (74.76%) Memory: 49.78 MB (94.17%) 

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