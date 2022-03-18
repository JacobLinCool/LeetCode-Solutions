// 1910. Remove All Occurrences of a Substring (6/26/2021)
// Runtime: 80 ms (56.84%) Memory: 40.24 MB (87.37%) 

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let pos = s.search(part);
    while(pos >= 0) {
        s = s.substr(0, pos) + s.substr(pos + part.length);
        pos = s.search(part);
    }
    return s;
};