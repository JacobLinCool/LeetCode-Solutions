// 189. Rotate Array (9/29/2021)
// Runtime: 104 ms (72.24%) Memory: 50.08 MB (94.82%) 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    const steps = k % nums.length;
    if (steps === 0) return;

    reverse(0, nums.length - 1);
    reverse(0, steps - 1);
    reverse(steps, nums.length - 1);

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
}