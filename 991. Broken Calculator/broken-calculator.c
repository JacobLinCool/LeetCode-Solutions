// 991. Broken Calculator (3/24/2022)
// Runtime: 0 ms (94.91%) Memory: 5.38 MB (83.27%) 

int brokenCalc (int startValue, int target) {
    int operations = 0;
    
    while (startValue < target) {
        if (target % 2 == 0) {
            target >>= 1;
        } else {
            target++;
        }
        
        operations++;
    }
    
    return operations + (startValue - target);
}
