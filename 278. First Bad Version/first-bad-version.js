// 278. First Bad Version (9/29/2021)
// Runtime: 68 ms (67.29%) Memory: 38.77 MB (93.73%) 

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1,
            right = n;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const good = !isBadVersion(mid);
            if (good && isBadVersion(mid + 1)) return mid + 1;
            if (good) left = mid + 1;
            else right = mid - 1;
        }
        return 1;
    };
}
// g g g b b