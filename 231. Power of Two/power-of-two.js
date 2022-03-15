// 231. Power of Two (12/21/2021)
// Runtime: 80 ms (75.52%) Memory: 40.46 MB (73.90%) 

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    return n > 0 && !(n & (n - 1));
}