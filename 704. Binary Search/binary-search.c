// 704. Binary Search (7/22/54201)
// Runtime: 32 ms (91.95%) Memory: 7.22 MB (21.35%) 

int search (int nums[], int nums_size, int target) {
    int upper = nums_size - 1, lower = 0;
    
    while (lower <= upper) {
        int mid = (upper + lower) / 2;
        
        if (nums[mid] == target) {
            return mid;
        }
        
        if (nums[mid] > target) {
            upper = mid - 1;
        }
        else {
            lower = mid + 1;
        }
    }
    
    return -1;
}
