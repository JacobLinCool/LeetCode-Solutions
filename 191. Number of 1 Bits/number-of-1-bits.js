// 191. Number of 1 Bits (3/10/53745)
// Runtime: 80 ms (57.00%) Memory: 40.46 MB (94.65%) 

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    return [...n.toString(2)].filter((x) => x === "1").length;
}