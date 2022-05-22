// 991. Broken Calculator (11/30/54194)
// Runtime: 0 ms (94.96%) Memory: 5.38 MB (83.81%) 

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
