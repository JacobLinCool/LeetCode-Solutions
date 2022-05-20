// 15. 3Sum (10/17/2021)
// Runtime: 136 ms (85.61%) Memory: 49.30 MB (94.84%) 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);

    const results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let ptrL = i + 1,
            ptrR = nums.length - 1;
        while (ptrL < ptrR) {
            const sum = nums[i] + nums[ptrL] + nums[ptrR];
            if (sum === 0) {
                results.push([nums[i], nums[ptrL++], nums[ptrR--]]);
                while (ptrL < ptrR && nums[ptrL] === nums[ptrL - 1]) ptrL++;
                while (ptrL < ptrR && nums[ptrR] === nums[ptrR + 1]) ptrR--;
            } else if (sum < 0) ptrL++;
            else ptrR--;
        }
    }

    return results;
}