// 746. Min Cost Climbing Stairs (12/27/2021)
// Runtime: 4 ms (80.67%) Memory: 5.70 MB (81.67%) 

int minCostClimbingStairs(int cost[], int costSize){
    // 差一步「之前」的總 cost 跟差兩步「之前」的總 cost，起始 0 意義是第零階的 cost
    int one = 0,
        two = 0;
    
    // 滾上去，記得要滾到 costSize
    for (int i = 2; i <= costSize; i++) {
        // 每次往上一層，差一步「之前」的總 cost 會變成差兩步「之前」的總 cost
        int new_two = one;
        // 而新的差一步「之前」的總 cost 則會是原本差一步「之前」的總 cost + 差一步的 cost 與原本差兩步「之前」的總 cost + 差兩步的 cost，兩者較小值
        one = one + cost[i - 1] < two + cost[i - 2] ? one + cost[i - 1] : two + cost[i - 2];
        two = new_two;
    }

    // 最後輸出的其實是到 n + 1 階差一步「之前」的總 cost
    return one;
}