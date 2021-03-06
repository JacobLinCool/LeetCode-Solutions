// 1299. Replace Elements with Greatest Element on Right Side (1/8/54028)
// Runtime: 98 ms (45.25%) Memory: 12.35 MB (70.95%) 

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* replaceElements(int arr[], int arrSize, int* returnSize) {
    int max = arr[arrSize - 1];
    arr[arrSize - 1] = -1;
    
    for (int i = arrSize - 2; i >= 0; i--) {
        if (arr[i] <= max) {
            arr[i] = max;
        } else {
            int tmp = max;
            max = arr[i];
            arr[i] = tmp;
        }
    }
    
    *returnSize = arrSize;
    return arr;
}