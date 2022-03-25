// 383. Ransom Note (10/3/2021)
// Runtime: 92 ms (77.91%) Memory: 41.11 MB (94.03%) 

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) map[magazine[i]] = (map[magazine[i]] || 0) + 1;

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) return false;
        map[ransomNote[i]]--;
    }
    return true;
}