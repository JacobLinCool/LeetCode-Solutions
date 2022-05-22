// 1880. Check if Word Equals Summation of Two Words (12/27/53379)
// Runtime: 76 ms (50.35%) Memory: 38.72 MB (94.41%) 

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    if(code(firstWord) + code(secondWord) == code(targetWord)) return true;
    else return false;
};

function code(str) {
    
    let n = parseInt(str.split("").map(x => String.fromCharCode(x.charCodeAt(0) - 49)).join(""));
// console.log(n);
    return n;
}