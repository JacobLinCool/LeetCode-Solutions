// 128. Longest Consecutive Sequence (6/6/2021)
// Runtime: 100 ms (83.60%) Memory: 47.41 MB (81.87%) 

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