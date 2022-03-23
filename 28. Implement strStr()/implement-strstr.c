// 28. Implement strStr() (12/27/2021)
// Runtime: 12 ms (76.50%) Memory: 6.04 MB (75.81%) 

int strStr(char haystack[], char needle[]) {
    // 如果 needle 為空字串，直接回傳 0
    if (needle[0] == '\0') return 0;

    // 計算兩字串長度
    int haystack_length = strlen(haystack);
    int needle_length = strlen(needle);

    // haystack 從頭開始比對
    for(int i = 0; i < haystack_length - needle_length + 1; i++) {
        // 用 memcmp 比較
        if(memcmp(haystack + i, needle, needle_length) == 0) {
            return i;
        }
    }
    return -1;
}
