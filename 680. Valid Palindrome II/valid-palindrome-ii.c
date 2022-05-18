// 680. Valid Palindrome II (4/2/2022)
// Runtime: 12 ms (91.14%) Memory: 9.10 MB (39.63%) 

bool is_palindrome(char* s, int n) {
    int half = n / 2;
    
    for (int i = 0; i < half; i++) {
        if (s[i] != s[n - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

bool validPalindrome (char* s) {
    int len = strlen(s);
    bool used = false;
    int left = 0, right = len - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            if (used) {
                return false;
            }
            
            if (s[left] == s[right - 1] || s[left + 1] == s[right]) {
                return is_palindrome(s + left, right - left) || is_palindrome(s + left + 1, right - left);
            }
            else {
                return false;
            }
            
            used = true;
        }
        
        left++;
        right--;
    }
    
    return true;
}