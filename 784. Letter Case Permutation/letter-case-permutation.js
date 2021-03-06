// 784. Letter Case Permutation (5/13/53742)
// Runtime: 92 ms (62.83%) Memory: 42.54 MB (94.56%) 

/**
 * @param {string} s
 * @return {string[]}
 */
function letterCasePermutation(s) {
    const idxs = [...s].map((char, idx) => (char.match(/[a-z]/i) ? idx : null)).filter((idx) => idx !== null);
    const result = [];
    backtrack(0, s.toLowerCase());
    return result;

    function backtrack(idx, current) {
        if (idx === idxs.length) return result.push(current);
        backtrack(idx + 1, current);
        backtrack(idx + 1, current.slice(0, idxs[idx]) + current[idxs[idx]].toUpperCase() + current.slice(idxs[idx] + 1));
    }
}