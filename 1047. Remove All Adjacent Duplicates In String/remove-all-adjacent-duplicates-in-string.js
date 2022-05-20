// 1047. Remove All Adjacent Duplicates In String (6/29/2021)
// Runtime: 100 ms (64.08%) Memory: 45.67 MB (94.88%) 

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    s = s.split("");
    
    let conti = true;
    while(conti) {
        conti = false;
        for(let i = s.length - 1; i >= 1; i--) {
            if(s[i] === s[i-1]) {
                s.splice(i-1, 2);
                i--;
                conti = true;
            }
        }
    }
    
    return s.join("");
};