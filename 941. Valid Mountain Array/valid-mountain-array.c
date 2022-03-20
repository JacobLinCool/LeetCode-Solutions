// 941. Valid Mountain Array (1/12/2022)
// Runtime: 40 ms (44.25%) Memory: 6.94 MB (65.49%) 



bool validMountainArray(int arr[], int arrSize){
    if (arrSize < 3) {
        return false;
    }
    
    if (arr[1] < arr[0]) {
        return false;
    }
    
    size_t i = 1;
    while (i < arrSize - 1 && arr[i] > arr[i - 1]) {
        i++;
    }
    while (i < arrSize && arr[i] < arr[i - 1]) {
        i++;
    }
    
    return i == arrSize;
}