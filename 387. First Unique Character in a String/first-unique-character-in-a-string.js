// 387. First Unique Character in a String (4/10/53726)
// Runtime: 128 ms (56.44%) Memory: 41.80 MB (94.99%) 

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    const m = new Map();
    for (let i = 0; i < s.length; i++) m.has(s[i]) ? m.set(s[i], m.get(s[i]) + 1) : m.set(s[i], 1);

    for (let i = 0; i < s.length; i++) if (m.get(s[i]) === 1) return i;
    return -1;
}