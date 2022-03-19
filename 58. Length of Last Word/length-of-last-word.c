// 58. Length of Last Word (3/4/2022)
// Runtime: 0 ms (92.90%) Memory: 5.61 MB (49.86%) 

int lengthOfLastWord (char* s) {
    int curr = 0, last = 0, len = strlen(s);
    
    for (int i = 0; i < len; i++) {
        if (s[i] != ' ') {
            curr++;
            last = curr;
        } else {
            curr = 0;
        }
    }
    
    return last;
}
