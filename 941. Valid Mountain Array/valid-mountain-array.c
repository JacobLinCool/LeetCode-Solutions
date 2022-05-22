// 941. Valid Mountain Array (7/13/54000)
// Runtime: 40 ms (30.08%) Memory: 6.94 MB (61.02%) 



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