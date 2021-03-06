// 14. Longest Common Prefix (2/10/54140)
// Runtime: 0 ms (94.43%) Memory: 5.98 MB (36.53%) 

char* longestCommonPrefix (char* strs[], int size) {
    char* common = calloc(200, sizeof(char));
    
    for (int i = 0; i < 200; i++) {
        char c = strs[0][i];
        if (c == '\0') {
            break;
        }
        
        bool escape = false;
        for (int j = 1; j < size; j++) {
            if (strs[j][i] != c) {
                escape = true;
                break;
            }
        }
                
        if (escape) {
            break;
        }
        
        common[i] = c;
    }
                
    return common;
}