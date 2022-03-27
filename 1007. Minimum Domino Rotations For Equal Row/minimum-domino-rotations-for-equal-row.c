// 1007. Minimum Domino Rotations For Equal Row (3/20/2022)
// Runtime: 116 ms (93.44%) Memory: 11.40 MB (48.65%) 

#define MAX(a, b) ((a > b) ? a : b)

int minDominoRotations (int tops[], int tops_size, int bottoms[], int bottoms_size) {
    uint16_t both[7] = { 0 };
    uint16_t only_tops[7] = { 0 };
    uint16_t only_bottoms[7] = { 0 };
    
    for (int i = 0; i < tops_size; i++) {
        if (tops[i] == bottoms[i]) {
            both[tops[i]]++;
        } else {
            only_tops[tops[i]]++;
            only_bottoms[bottoms[i]]++;
        }
    }
    
    for (int i = 1; i < 7; i++) {
        if (only_tops[i] + only_bottoms[i] + both[i] == tops_size) {
            return tops_size - both[i] - MAX(only_tops[i], only_bottoms[i]);
        }
    }
    
    return -1;
}
