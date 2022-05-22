// 1897. Redistribute Characters to Make All Strings Equal (5/12/53418)
// Runtime: 152 ms (2.88%) Memory: 41.68 MB (94.23%) 

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