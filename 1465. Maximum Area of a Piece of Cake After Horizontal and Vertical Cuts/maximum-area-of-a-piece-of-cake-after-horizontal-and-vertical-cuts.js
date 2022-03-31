// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts (6/4/2021)
// Runtime: 140 ms (80.00%) Memory: 48.12 MB (94.12%) 

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    verticalCuts.sort((a,b) => a - b);
    horizontalCuts.sort((a,b) => a - b);
    console.log(verticalCuts[0], verticalCuts[verticalCuts.length - 1]);
    console.log(horizontalCuts[0], horizontalCuts[horizontalCuts.length - 1]);
    
    let max_height = horizontalCuts[0], max_width = verticalCuts[0];
    for(let i = 1; i < horizontalCuts.length; i++) {
        let height = horizontalCuts[i] - horizontalCuts[i - 1];
        max_height = height > max_height ? height : max_height;
    }
    let height = h - horizontalCuts[horizontalCuts.length - 1];
    max_height = height > max_height ? height : max_height;
    
    for(let i = 1; i < verticalCuts.length; i++) {
        let width = verticalCuts[i] - verticalCuts[i - 1];
        max_width = width > max_width ? width : max_width;
    }
    let width = w - verticalCuts[verticalCuts.length - 1];
    max_width = width > max_width ? width : max_width;
    
    return (max_height * max_width) % (1e9 + 7);
};