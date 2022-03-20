// 740. Delete and Earn (3/5/2022)
// Runtime: 6 ms (57.78%) Memory: 5.94 MB (64.89%) 

int deleteAndEarn (int nums[], int size) {
    int vals[10002] = { 0 };
    for (int i = 0; i < size; i++) {
        vals[nums[i]] += nums[i];
    }
    
    int prev = 0, curr = 0;
    for (int i = 1; i <= 10000; i++) {
        if (vals[i - 1]) {
            int temp = prev;
            prev = curr;
            curr = temp + vals[i] > prev ? temp + vals[i] : prev;
        } else {
            prev = curr;
            curr += vals[i];
        }
    }
    
    return curr > prev ? curr : prev;
}
