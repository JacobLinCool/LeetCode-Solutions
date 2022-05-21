// 856. Score of Parentheses (3/17/2022)
// Runtime: 0 ms (82.05%) Memory: 1.90 MB (35.90%) 

func scoreOfParentheses(s string) int {
    score, depth := 0, 0
    
    for i := 0; i < len(s); i++ {
        if s[i] == '(' {
            if s[i + 1] != s[i] {
                score += 1 << depth
                i++
            } else {
                depth++
            }
        } else {
            depth--
        }
    }
    
    return score
}