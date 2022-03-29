// 231. Power of Two (12/21/2021)
// Runtime: 80 ms (71.48%) Memory: 40.46 MB (93.96%) 

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    return n > 0 && !(n & (n - 1));
}