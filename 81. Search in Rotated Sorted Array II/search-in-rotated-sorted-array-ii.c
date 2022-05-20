// 81. Search in Rotated Sorted Array II (3/28/2022)
// Runtime: 3 ms (86.35%) Memory: 6.14 MB (22.57%) 

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
