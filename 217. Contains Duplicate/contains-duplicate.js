// 217. Contains Duplicate (12/23/53712)
// Runtime: 68 ms (94.68%) Memory: 44.73 MB (94.80%) 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const set = new Set();
    for (const n of nums) {
        if (set.has(n)) return true;
        set.add(n);
    }
    return false;
}