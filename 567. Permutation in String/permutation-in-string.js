// 567. Permutation in String (10/3/2021)
// Runtime: 104 ms (73.38%) Memory: 42.36 MB (91.93%) 

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    let s1Map = {};
    for (let i = 0; i < s1.length; i++) s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;

    let len = 0;
    let start = 0;
    let win = {};
    for (let i = 0; i < s2.length; i++) {
        let char = s2[i];
        if (!s1Map[char]) {
            start = i + 1;
            win = {};
            len = 0;
            continue;
        }

        win[char] = (win[char] || 0) + 1;
        len++;
        if (s1Map[char] < win[char]) {
            while (s1Map[char] < win[char]) {
                win[s2[start]]--;
                len--;
                start++;
            }
        }
        if (len == s1.length) return true;
    }
    return false;
}