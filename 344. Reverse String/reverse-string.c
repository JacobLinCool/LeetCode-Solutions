// 344. Reverse String (10/26/54217)
// Runtime: 48 ms (88.76%) Memory: 12.32 MB (38.80%) 

void reverseString (char* s, int size) {
    int half = size / 2;
    int last = size - 1;
    
    for (int i = 0; i < half; i++) {
        char tmp = s[i];
        s[i] = s[last - i];
        s[last - i] = tmp;
    }
}