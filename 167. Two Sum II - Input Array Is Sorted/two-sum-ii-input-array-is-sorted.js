// 167. Two Sum II - Input Array Is Sorted (6/26/53718)
// Runtime: 72 ms (70.69%) Memory: 39.50 MB (94.29%) 

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    const m = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        if (m.has(n)) return [m.get(n), i + 1];
        m.set(target - n, i + 1);
    }
}