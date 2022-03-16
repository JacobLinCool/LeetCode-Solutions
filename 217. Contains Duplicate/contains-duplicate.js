// 217. Contains Duplicate (9/29/2021)
// Runtime: 68 ms (94.79%) Memory: 44.73 MB (94.87%) 

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