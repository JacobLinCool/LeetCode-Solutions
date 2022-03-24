// 283. Move Zeroes (1/22/2022)
// Runtime: 129 ms (36.12%) Memory: 15.29 MB (22.98%) 

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