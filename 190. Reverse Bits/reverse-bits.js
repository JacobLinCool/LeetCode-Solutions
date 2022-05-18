// 190. Reverse Bits (10/12/2021)
// Runtime: 128 ms (4.21%) Memory: 40.50 MB (94.93%) 

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