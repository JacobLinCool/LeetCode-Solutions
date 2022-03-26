// 242. Valid Anagram (10/3/2021)
// Runtime: 88 ms (77.33%) Memory: 39.59 MB (94.67%) 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    for (let i = 0; i < t.length; i++) map[t[i]] = (map[t[i]] || 0) + 1;

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) return false;
        map[s[i]]--;
    }
    return true;
}