// 191. Number of 1 Bits (5/9/54369)
// Runtime: 0 ms (90.80%) Memory: 1.84 MB (43.77%) 

func hammingWeight(num uint32) int {
    count := 0
    
    for num > 0 {
        num = num & (num - 1)
        count++
    }
    
    return count
}
