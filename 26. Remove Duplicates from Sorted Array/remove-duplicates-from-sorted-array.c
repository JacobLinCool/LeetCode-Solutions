// 26. Remove Duplicates from Sorted Array (12/27/2021)
// Runtime: 8 ms (94.11%) Memory: 7.45 MB (67.33%) 

int removeDuplicates(int nums[], int numsSize) {
    // 當前要與後面比較的 index
    int current = 0;
    
    // 從第二個開始，與當前的值比較
    for(int i = 1; i < numsSize; i++) {
        if(nums[i] != nums[current]) {
            nums[++current] = nums[i];
        }
    }
    
    return numsSize ? current + 1 : 0;
}