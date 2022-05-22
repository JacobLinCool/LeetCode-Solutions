// 46. Permutations (4/13/53740)
// Runtime: 88 ms (62.66%) Memory: 41.45 MB (94.84%) 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    const result = [];
    backtrack([]);
    return result;

    function backtrack(current) {
        if (current.length === nums.length) return result.push(current.slice());
        for (let i = 0; i < nums.length; i++) {
            if (current.includes(nums[i])) continue;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
        }
    }
}