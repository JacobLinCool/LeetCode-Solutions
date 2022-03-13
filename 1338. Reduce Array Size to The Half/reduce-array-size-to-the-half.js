// 1338. Reduce Array Size to The Half (7/7/2021)
// Runtime: 224 ms (45.31%) Memory: 61.27 MB (57.81%) 

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let counts = [];
    for(let i = 0; i < arr.length; i++) {
        if(!counts[arr[i]]) counts[arr[i]] = {
            num: arr[i],
            count: 0
        };
        counts[arr[i]].count++;
    }
    counts.sort((a,b)=>b.count-a.count);
    
    let r = 0;
    for(let i = 0; i < counts.length; i++) {
        if(r >= arr.length / 2) return i;
        r += counts[i].count;
    }
    return counts.length;
};