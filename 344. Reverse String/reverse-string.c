// 344. Reverse String (4/1/2022)
// Runtime: 48 ms (88.37%) Memory: 12.32 MB (39.12%) 

void reverseString (char* s, int size) {
    int half = size / 2;
    int last = size - 1;
    
    for (int i = 0; i < half; i++) {
        char tmp = s[i];
        s[i] = s[last - i];
        s[last - i] = tmp;
    }
}