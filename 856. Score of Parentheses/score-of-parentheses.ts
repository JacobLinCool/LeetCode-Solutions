// 856. Score of Parentheses (3/17/2022)
// Runtime: 72 ms (73.64%) Memory: 42.82 MB (57.27%) 

function scoreOfParentheses(s: string): number {
    let score = 0, depth = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (s[i + 1] !== s[i]) {
                score += 1 << depth;
                i++;
            } else {
                depth++;
            }
        } else {
            depth--;
        }
    }
    
    return score;
};