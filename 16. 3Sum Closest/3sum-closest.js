// 16. 3Sum Closest (10/17/2021)
// Runtime: 76 ms (83.91%) Memory: 40.58 MB (76.51%) 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);

    let result = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let ptrL = i + 1,
            ptrR = nums.length - 1;
        while (ptrL < ptrR) {
            const sum = nums[i] + nums[ptrL] + nums[ptrR];
            if (sum === target) return sum; 
            else {
                if(Math.abs(sum - target) < Math.abs(result - target)) result = sum;
                if (sum < target) ptrL++;
                else ptrR--;
            }
        }
    }

    return result;
};