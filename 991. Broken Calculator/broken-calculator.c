// 991. Broken Calculator (3/24/2022)
// Runtime: 0 ms (91.30%) Memory: 5.38 MB (65.22%) 

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
