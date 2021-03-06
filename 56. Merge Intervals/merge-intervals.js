// 56. Merge Intervals (1/31/53841)
// Runtime: 84 ms (94.59%) Memory: 41.56 MB (94.81%) 

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    
    for(let i = intervals.length - 2; i >= 0; i--) {
        if(intervals[i][1] >= intervals[i + 1][0]) {
            const prev = intervals.splice(i + 1, 1)[0];
            intervals[i] = [ Math.min(intervals[i][0], prev[0]), Math.max(intervals[i][1], prev[1]) ];
        }
    }
    
    return intervals;
};