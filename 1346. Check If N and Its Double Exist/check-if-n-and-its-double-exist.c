// 1346. Check If N and Its Double Exist (7/7/54000)
// Runtime: 11 ms (23.47%) Memory: 6.38 MB (18.05%) 

bool checkIfExist(int arr[], int arrSize){
    bool table[4002] = { 0 };
    
    for (size_t i = 0; i < arrSize; i++) {
        if (table[arr[i] + 2000]) {
            return true;
        }
        
        if (arr[i] % 2 == 0) {
            table[(arr[i] / 2) + 2000] = true;
        }
        table[(arr[i] * 2) + 2000] = true;
    }
    
    return false;
}