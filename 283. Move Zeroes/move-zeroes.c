// 283. Move Zeroes (5/17/54029)
// Runtime: 129 ms (32.74%) Memory: 15.29 MB (22.96%) 

void moveZeroes(int nums[], int numsSize) {
    int head = 0;
    
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] != 0) {
            nums[head++] = nums[i];
        }
    }
    
    for (int i = head; i < numsSize; i++) {
        nums[i] = 0;
    }
    
    return;
}