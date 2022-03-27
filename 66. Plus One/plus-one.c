// 66. Plus One (3/4/2022)
// Runtime: 0 ms (94.16%) Memory: 6.07 MB (23.25%) 

int* plusOne (int* digits, int size, int* new_size) {
    int* new_digits = calloc(size + 1, sizeof(int));
    new_digits[size] = 1;
    
    for (int i = size - 1; i >= 0; i--) {
        new_digits[i + 1] = digits[i] + new_digits[i + 1];
        new_digits[i] = new_digits[i + 1] / 10;
        new_digits[i + 1] %= 10;
    }
    
    if (new_digits[0]) {
        *new_size = size + 1;
        return new_digits;
    } else {
        *new_size = size;
        return new_digits + 1;
    }
}