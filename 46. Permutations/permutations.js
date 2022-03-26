// 46. Permutations (10/9/2021)
// Runtime: 88 ms (65.78%) Memory: 41.45 MB (94.67%) 

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