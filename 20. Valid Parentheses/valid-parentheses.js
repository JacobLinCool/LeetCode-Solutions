// 20. Valid Parentheses (10/6/2021)
// Runtime: 104 ms (27.17%) Memory: 38.37 MB (93.22%) 

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stk = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "(" || c === "[" || c === "{") stk.push(c);
        else {
            if (stk.length === 0) return false;
            const last = stk.pop();
            if ((c === ")" && last !== "(") || (c === "]" && last !== "[") || (c === "}" && last !== "{")) return false;
        }
    }
    return stk.length === 0;
}