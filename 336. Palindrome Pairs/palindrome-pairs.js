// 336. Palindrome Pairs (6/13/2021)
// Runtime: 636 ms (95.00%) Memory: 49.39 MB (95.00%) 

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    // 把字串反轉的函式
    function reverse(word) {
        return word.split("").reverse().join("");
    }
    
    // 儲存找到的迴文對
    let palindromes = new Set();
    // 字典，方便反查，以反轉的 word 為鍵， word 位置為值
    let dict = new Map();
    words.forEach((word, i) => dict.set(reverse(word), i));
    
    // 遍歷 words
    words.forEach((word, i) => {
        // 如果 word 自己是非空字串迴文，且字典有空字串可以配對，找到一個迴文對
        if(word == reverse(word) && dict.has("") && dict.get("") != i)
            palindromes.add([i, dict.get("")]);
        
        for(let len = 1; len <= word.length; len++) {
            // 分 word 的左邊長 len 的部分與右邊剩餘的部分
            let left = word.substr(0, len), right = word.substr(len);
            
            // 左邊部分本身是迴文，且右邊部分可以在字典找到配對，找到一個迴文對
            if(left == reverse(left) && dict.has(right) && dict.get(right) != i) 
                palindromes.add([dict.get(right), i]);
            // 右邊部分本身是迴文，且左邊部分可以在字典找到配對，找到一個迴文對
            if(right == reverse(right) && dict.has(left) && dict.get(left) != i) 
                palindromes.add([i, dict.get(left)]);
        }
    });
    
    // 需要在輸出前將 Set 轉換成 Array
    return [...palindromes];
};
