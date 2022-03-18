// 557. Reverse Words in a String III (10/1/2021)
// Runtime: 89 ms (68.05%) Memory: 44.89 MB (90.95%) 

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    return s
        .split(" ")
        .map((w) => w.split("").reverse().join(""))
        .join(" ");
}