// 27. Remove Element (1/12/2022)
// Runtime: 2 ms (67.08%) Memory: 5.86 MB (88.33%) 

int removeElement(int nums[], int numsSize, int val) {
    int32_t removed = 0;
    
    for (size_t i = 0; i < numsSize; i++) {
        if (nums[i] == val) {
            removed++;
        }
        else {
            nums[i - removed] = nums[i];
        }
    }
    
    return numsSize - removed;
}