// 67. Add Binary (3/21/2022)
// Runtime: 2 ms (46.57%) Memory: 5.61 MB (78.02%) 

#define MAX(a, b) ((a > b) ? a : b)

char* addBinary (char* a, char* b) {
    int len_a = strlen(a), len_b = strlen(b);
    char* result = (char*)calloc(MAX(len_a, len_b) + 2, sizeof(char));
    
    int carry = 0;
    int idx_a = strlen(a) - 1, idx_b = strlen(b) - 1;
    for (int i = MAX(len_a, len_b); i >= 0; i--) {
        int bit = carry;
        if (idx_a >= 0) bit += a[idx_a--] - '0';
        if (idx_b >= 0) bit += b[idx_b--] - '0';
        carry = bit >> 1;
        result[i] = (bit % 2) + '0';
    }
    
    return result + (result[0] == '0');
}