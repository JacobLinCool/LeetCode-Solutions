// 88. Merge Sorted Array (1/14/53714)
// Runtime: 64 ms (80.37%) Memory: 39.17 MB (94.97%) 

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
}