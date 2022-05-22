// 128. Longest Consecutive Sequence (10/2/53399)
// Runtime: 100 ms (82.57%) Memory: 47.41 MB (93.94%) 

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	let max = 0;
	const nums_set = new Set(nums);

	for(let num of nums_set) {
		if(nums_set.has(num-1)) continue;
        
        let count = 1;
        while(nums_set.has(++num)) count++;
        
        max = count > max ? count : max;
    }

	return max;
};