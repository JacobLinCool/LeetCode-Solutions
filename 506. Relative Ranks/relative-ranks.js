// 506. Relative Ranks (10/26/53712)
// Runtime: 76 ms (93.07%) Memory: 42.64 MB (94.89%) 

/**
 * @param {number[]} score
 * @return {string[]}
 */

const ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];

function findRelativeRanks(score) {
    const pairs = [];
    for (let i = 0; i < score.length; i++) pairs.push([i, score[i]]);
    pairs.sort((a, b) => b[1] - a[1]);

    const result = [];
    pairs.forEach((pair, i) => {
        result[pair[0]] = i < 3 ? ranks[i] : (i + 1).toString();
    });

    return result;
}