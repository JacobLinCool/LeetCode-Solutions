// 413. Arithmetic Slices (10/1/54138)
// Runtime: 3 ms (39.58%) Memory: 6.15 MB (0.00%) 

int numberOfArithmeticSlices (int nums[], int size) {
    int count = 0, curr = 2;
    
    for (int i = 2; i < size; i++) {
        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            curr++;
            count += curr > 2 ? curr - 2 : 0;
        } else {
            curr = 2;
        }
    }
    
    return count;
}