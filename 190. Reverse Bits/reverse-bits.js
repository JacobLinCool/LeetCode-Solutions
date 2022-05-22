// 190. Reverse Bits (6/16/53748)
// Runtime: 128 ms (3.59%) Memory: 40.50 MB (93.50%) 

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) + (n & 1);
        n >>= 1;
    }
    return result >>> 0;
}