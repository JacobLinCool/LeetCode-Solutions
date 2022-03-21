// 476. Number Complement (12/27/2021)
// Runtime: 0 ms (90.21%) Memory: 5.43 MB (44.76%) 

int findComplement(int num) {
    return ~num & (0xFFFFFFFF >> __builtin_clz(num)); 
}