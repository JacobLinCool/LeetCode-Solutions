// 77. Combinations (10/9/2021)
// Runtime: 116 ms (82.39%) Memory: 44.04 MB (93.00%) 

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    const result = [];
    backtrack(1, []);
    return result;

    function backtrack(start, curr) {
        if (curr.length === k) return result.push([...curr]);
        for (let i = start; i <= n; i++) {
            curr.push(i);
            backtrack(i + 1, curr);
            curr.pop();
        }
    }
}