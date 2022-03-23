// 991. Broken Calculator (3/23/2022)
// Runtime: 3 ms (51.72%) Memory: 5.61 MB (0.00%) 

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
