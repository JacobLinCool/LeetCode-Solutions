// 20. Valid Parentheses (2/27/53733)
// Runtime: 104 ms (16.91%) Memory: 38.37 MB (94.91%) 

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