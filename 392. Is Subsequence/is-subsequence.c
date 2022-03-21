// 392. Is Subsequence (3/2/2022)
// Runtime: 4 ms (27.26%) Memory: 5.76 MB (0.00%) 

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