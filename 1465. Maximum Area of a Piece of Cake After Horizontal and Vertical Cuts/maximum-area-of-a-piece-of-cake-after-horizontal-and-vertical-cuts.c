// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts (12/26/2021)
// Runtime: 56 ms (75.00%) Memory: 12.24 MB (50.00%) 

int compare (const int *a, const int *b) {
    return (*a - *b);
}

int maxArea(int h, int w, int horizontalCuts[], int horizontalCutsSize, int verticalCuts[], int verticalCutsSize){
    // 先把切割線都做遞增排序
    qsort(horizontalCuts, horizontalCutsSize, sizeof(int), compare);
    qsort(verticalCuts, verticalCutsSize, sizeof(int), compare);

    // 紀錄最大高度以及最大寬度，初始值設為第一條切割線到相鄰邊界的距離
    int64_t max_height = horizontalCuts[0], max_width = verticalCuts[0];

    // 逐步看兩相鄰切割線距離，找最大高度
    for(int i = 1; i < horizontalCutsSize; i++) {
        int64_t height = horizontalCuts[i] - horizontalCuts[i - 1];
        max_height = height > max_height ? height : max_height;
    }
    // 也要看看最後一條切割線到相鄰邊界的距離
    int64_t height = h - horizontalCuts[horizontalCutsSize - 1];
    max_height = height > max_height ? height : max_height;
    
    // 逐步看兩相鄰切割線距離，找最大寬度
    for(int i = 1; i < verticalCutsSize; i++) {
        int64_t width = verticalCuts[i] - verticalCuts[i - 1];
        max_width = width > max_width ? width : max_width;
    }
    // 看看最後一條切割線到相鄰邊界的距離
    int64_t width = w - verticalCuts[verticalCutsSize - 1];
    max_width = width > max_width ? width : max_width;
    
    // 輸出最大塊面積
    return (int)((max_height * max_width) % (int64_t)1000000007);
}