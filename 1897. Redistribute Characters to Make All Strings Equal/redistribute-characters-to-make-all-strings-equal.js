// 1897. Redistribute Characters to Make All Strings Equal (6/13/2021)
// Runtime: 152 ms (11.11%) Memory: 41.68 MB (90.12%) 

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    
    if(words.length == 1) return true;
    
    let m = {};
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(m[words[i][j]]) m[words[i][j]]++;
            else m[words[i][j]] = 1;
        }
    }
    
    let v = Object.values(m);
    for(let i = 0; i < v.length; i++) {
        if(v[i] % words.length !== 0) return false;
    }
    return true;
};