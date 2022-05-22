// 1. Two Sum (5/15/53896)
// Runtime: 72 ms (78.49%) Memory: 6.56 MB (21.30%) 

int* twoSum(int* nums, int nums_size, int target, int* return_size) {
    int* result = (int*)malloc(sizeof(int) * 2);
    int i, j;
    for (i = 0; i < nums_size; i++) {
        for (j = i + 1; j < nums_size; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                *return_size = 2;
                return result;
            }
        }
    }
    return result;
}