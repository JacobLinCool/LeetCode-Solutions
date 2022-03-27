// 476. Number Complement (12/27/2021)
// Runtime: 0 ms (90.85%) Memory: 5.43 MB (56.86%) 

int findComplement(int num) {
    return ~num & (0xFFFFFFFF >> __builtin_clz(num)); 
}