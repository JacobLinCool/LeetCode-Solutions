// 476. Number Complement (2/26/53959)
// Runtime: 0 ms (93.33%) Memory: 5.43 MB (60.00%) 

int findComplement(int num) {
    return ~num & (0xFFFFFFFF >> __builtin_clz(num)); 
}