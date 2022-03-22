// 763. Partition Labels (3/21/2022)
// Runtime: 0 ms (93.50%) Memory: 5.85 MB (43.90%) 

#define MAX(a, b) ((a > b) ? a : b)

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* partitionLabels (char* s, int* return_size) {
    int len = strlen(s);
    
    int last[26] = { -1 };
    for (int i = 0; s[i] != '\0'; i++) {
        last[s[i] - 'a'] = i;
    }
    
    int* slices = (int*)malloc(26 * sizeof(int));
    int size = 0;
    
    int from = -1, farthest = -1;
    for (int i = 0; s[i] != '\0'; i++) {
        if (from == -1) {
            from = i;
        }
        
        farthest = MAX(farthest, last[s[i] - 'a']);
        
        if (i == farthest) {
            slices[size++] = farthest - from + 1;
            from = -1;
        }
    }
    
    *return_size = size;
    return slices;
}
