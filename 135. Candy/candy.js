// 135. Candy (6/27/2021)
// Runtime: 72 ms (87.31%) Memory: 43.36 MB (91.64%) 

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    let left = new Array(n).fill(1), right = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++)
        if(ratings[i] > ratings[i-1])
            left[i] = left[i-1] + 1;
    
    for(let i = n - 2; i >= 0; i--)
        if(ratings[i] > ratings[i+1])
            right[i] = right[i+1] + 1;
    
    let sum = 0;
    for(let i = 0; i < n; i++)
        sum += Math.max(left[i], right[i]);
    
    return sum;
};