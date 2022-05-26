// 191. Number of 1 Bits (5/20/54369)
// Runtime: 109 ms (33.99%) Memory: 44.26 MB (87.93%) 

function hammingWeight(n: number): number {
    let count = 0;
    
    while (n) {
        count++;
        n = n & (n - 1);
    }
    
    return count;
};
