// 56. Merge Intervals (11/14/2021)
// Runtime: 84 ms (94.60%) Memory: 41.56 MB (94.91%) 

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