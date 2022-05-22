// 344. Reverse String (4/1/53720)
// Runtime: 127 ms (39.44%) Memory: 46.52 MB (94.82%) 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    for (let i = 0; i < parseInt(s.length / 2); i++) [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
}