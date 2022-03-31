// 410. Split Array Largest Sum (3/31/2022)
// Runtime: 0 ms (90.91%) Memory: 5.71 MB (72.73%) 

#define max(a, b) ((a) > (b) ? a : b)

int splitArray (int nums[], int nums_size, int m) {
    int left = INT32_MIN, right = 0;
    for (int i = 0; i < nums_size; i++) {
        left = max(left, nums[i]);
        right += nums[i];
    }
    
    int ans = 0;
    while (left <= right) {
        int largest_test = left + (right - left) / 2;
        
        int slices = 1, current = 0;
        for (int i = 0; i < nums_size; i++) {
            if (current + nums[i] <= largest_test) {
                current += nums[i];
            }
            else {
                current = nums[i];
                slices++;
            }
        }
        
        if (slices <= m) {
            right = largest_test - 1;
            ans = largest_test;
        }
        else {
            left = largest_test + 1;
        }
    }
    
    return ans;
}
