// 3. Longest Substring Without Repeating Characters (10/3/2021)
// Runtime: 88 ms (86.66%) Memory: 43.28 MB (94.89%) 

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let start = 0,
        end = 0,
        max = 0;
    const set = new Set();
    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end++]);
            max = Math.max(max, set.size);
        } else set.delete(s[start++]);
    }
    return max;
}