// 287. Find the Duplicate Number (2/4/54210)
// Runtime: 140 ms (42.57%) Memory: 14.42 MB (9.69%) 

int comp (int* a, int* b) {
    return *a - *b;
}

int findDuplicate (int nums[], int nums_size) {
    qsort(nums, nums_size, sizeof(int), &comp);
    
    for (int i = 0; i < nums_size - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
    
    return 0;
}
