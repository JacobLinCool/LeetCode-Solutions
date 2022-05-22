// 1876. Substrings of Size Three with Distinct Characters (8/13/53378)
// Runtime: 140 ms (3.27%) Memory: 39.62 MB (94.86%) 

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let solution = 0;
    for(var i = 0; i < s.length - 2; i++) {
        let sub = s.substr(i, 3);
        if(good(sub)) solution++;
    }
    return solution;
};

function good(str) {
    if(str[0] != str[1] && str[1] != str[2] && str[0] != str[2]) return true;
    else return false;
}