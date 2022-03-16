// 1009. Complement of Base 10 Integer (12/27/2021)
// Runtime: 0 ms (91.20%) Memory: 5.70 MB (16.80%) 

int bitwiseComplement(int n) {
    // 如果 n 為 0，直接回傳 1
    if(n == 0) return 1;
    
    int flipped = n;
    
    // 從最尾端開始遍歷，每次翻一個，其餘維持原狀
    for(int64_t i = 1; i <= n; i <<= 1) {
        flipped = flipped ^ i;
    }
    
    return flipped;
}