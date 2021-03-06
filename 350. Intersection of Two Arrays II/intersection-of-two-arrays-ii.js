// 350. Intersection of Two Arrays II (6/10/53718)
// Runtime: 68 ms (81.56%) Memory: 40.26 MB (94.85%) 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    const m = new Map();
    nums1.forEach((num) => {
        if (!m.has(num)) m.set(num, 1);
        else m.set(num, m.get(num) + 1);
    });

    const result = [];
    nums2.forEach((num) => {
        if (m.has(num) && m.get(num) > 0) {
            result.push(num);
            m.set(num, m.get(num) - 1);
        }
    });

    return result;
}