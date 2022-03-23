// 344. Reverse String (10/1/2021)
// Runtime: 127 ms (48.86%) Memory: 46.52 MB (87.21%) 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    for (let i = 0; i < parseInt(s.length / 2); i++) [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
}