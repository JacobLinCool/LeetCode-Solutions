// 191. Number of 1 Bits (10/10/2021)
// Runtime: 80 ms (57.18%) Memory: 40.46 MB (94.84%) 

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    return [...n.toString(2)].filter((x) => x === "1").length;
}