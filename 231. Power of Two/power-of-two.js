// 231. Power of Two (6/3/53941)
// Runtime: 80 ms (68.60%) Memory: 40.46 MB (94.98%) 

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    return n > 0 && !(n & (n - 1));
}