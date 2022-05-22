// 9. Palindrome Number (11/15/53956)
// Runtime: 8 ms (84.94%) Memory: 6.07 MB (18.87%) 

bool isPalindrome(int x){
    // x 是負數，直接 false
    if(x < 0) return false;
    
    // y 用來存 x 的反轉數
    int64_t reversed = 0;
    
    // 從最後一位開始，每次將 reversed 左推後加上該位之值
    for(int64_t num = x; num > 0; num /= 10) {
        reversed = reversed * 10 + num % 10;
    }
    
    // 比較兩者是否相等
    return (int64_t)x == reversed;
}