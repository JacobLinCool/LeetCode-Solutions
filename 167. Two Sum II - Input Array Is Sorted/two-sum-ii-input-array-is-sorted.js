// 167. Two Sum II - Input Array Is Sorted (10/1/2021)
// Runtime: 72 ms (75.63%) Memory: 39.50 MB (76.38%) 

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