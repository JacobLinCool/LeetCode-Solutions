// 22. Generate Parentheses (6/16/2021)
// Runtime: 76 ms (64.20%) Memory: 39.98 MB (94.00%) 

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 存答案
    let result = [];
    
    function generator(left, right, text) {
        // 如果左右都生成完，放到答案去
        if(left === 0 && right === 0) result.push(text);
        
        // 左邊還沒生成完，將左界右推，並在最左邊加上 (
        if(left > 0) generator(left - 1, right, text + "(");
        // 右邊還沒生成完，將右界左推，並在最右邊加上 )
        if(left < right) generator(left, right - 1, text + ")");
    }
    
    // 開始生成答案
    generator(n, n, "");
    
    // 輸出所有答案
    return result;
};