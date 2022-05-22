// 58. Length of Last Word (2/14/54140)
// Runtime: 0 ms (94.28%) Memory: 5.61 MB (51.08%) 

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
