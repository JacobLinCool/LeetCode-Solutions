// 9. Palindrome Number (12/27/2021)
// Runtime: 8 ms (83.95%) Memory: 6.07 MB (20.76%) 

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