// 658. Find K Closest Elements (7/3/2021)
// Runtime: 120 ms (61.88%) Memory: 45.48 MB (92.73%) 

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let elements = arr.map(val => {
        return {
            val: val,
            dist: Math.abs(val - x)
        };
    });
    
    elements.sort((a, b) => a.dist - b.dist);
    
    return elements.slice(0, k).sort((a, b) => a.val - b.val).map(element => element.val);
};