// 1081. Smallest Subsequence of Distinct Characters (9/11/54180)
// Runtime: 0 ms (75.00%) Memory: 5.52 MB (75.00%) 

char* smallestSubsequence (char* s) {
    int last_pos[26] = { -1 };
    for (int i = 0; s[i] != '\0'; i++) {
        last_pos[s[i] - 'a'] = i;
    }
    
    bool used[26] = { false };
    int stk[1001] = { 0 };
    int stk_size = 0;
    for (int i = 0; s[i] != '\0'; i++) {
        int code = s[i] - 'a';
        if (used[code]) {
            continue;
        }
        
        while (stk_size) {
            int prev = stk[stk_size - 1];
            if (prev < code || i >= last_pos[prev]) {
                break;
            }
            stk_size--;
            used[prev] = false;
        }
        
        stk[stk_size++] = code;
        used[code] = true;
    }
    
    char* ans = (char*)calloc(stk_size + 1, sizeof(char));
    for (int i = 0; i < stk_size; i++) {
        ans[i] = stk[i] + 'a';
    }
    
    return ans;
}
