// 704. Binary Search (3/26/2022)
// Runtime: 32 ms (89.56%) Memory: 7.22 MB (20.23%) 

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
