// 392. Is Subsequence (12/19/54135)
// Runtime: 4 ms (29.21%) Memory: 5.76 MB (0.00%) 

bool isSubsequence (char* s, char* t) {
    int s_len = strlen(s), t_len = strlen(t), matched = 0;
    
    if (s_len == 0) {
        return true;
    }
    
    for (int i = 0; i < t_len; i++) {
        if (t[i] == *(s + matched)) {
            matched++;
        }
        
        if (matched >= s_len) {
            return true;
        }
    }
    
    return false;
}