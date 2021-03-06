// 856. Score of Parentheses (9/24/54176)
// Runtime: 0 ms (93.55%) Memory: 5.50 MB (70.97%) 

int scoreOfParentheses (char * s) {
    int score = 0, depth = 0;
    
    for (int i = 0; s[i] != '\0'; i++) {
        if (s[i] == '(') {
            if (s[i + 1] == ')') {
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
}
