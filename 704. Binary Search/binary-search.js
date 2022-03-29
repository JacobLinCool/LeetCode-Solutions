// 704. Binary Search (9/29/2021)
// Runtime: 60 ms (91.98%) Memory: 42.49 MB (92.99%) 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (left === right) break;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}