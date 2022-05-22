// 81. Search in Rotated Sorted Array II (6/14/54207)
// Runtime: 3 ms (86.24%) Memory: 6.14 MB (23.02%) 

bool search (int nums[], int nums_size, int target) {
    bool decreased = false;
    for (int i = 0; i < nums_size; i++) {
        if (nums[i] == target) {
            return true;
        }
        if (i < nums_size - 1) {
            if (nums[i] > nums[i + 1]) {
                if (decreased) {
                    break;
                }
                decreased = true;
            }
        }
    }
    return false;
}
