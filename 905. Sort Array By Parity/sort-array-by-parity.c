// 905. Sort Array By Parity (1/22/2022)
// Runtime: 41 ms (41.34%) Memory: 8.89 MB (86.30%) 

int* sortArrayByParity(int nums[], int numsSize, int* returnSize) {
    int head = 0, tail = 0;
    
    while (tail < numsSize) {
        if (nums[tail] % 2 == 0) {
            int temp = nums[head];
            nums[head] = nums[tail];
            nums[tail] = temp;
            head++;
        }
        tail++;
    }
    
    *returnSize = numsSize;
    return nums;
}