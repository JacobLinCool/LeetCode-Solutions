// 13. Roman to Integer (1/21/54192)
// Runtime: 230 ms (24.32%) Memory: 48.64 MB (42.38%) 

function romanToInt(s: string): number {
    const dict = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    
    let ans = dict[s[s.length - 1]];
    
    for (let i = 0; i < s.length - 1; i++) {
        if (dict[s[i]] < dict[s[i + 1]]) {
            ans -= dict[s[i]];
        } else {
            ans += dict[s[i]];
        }
    }
    
    return ans;
};
