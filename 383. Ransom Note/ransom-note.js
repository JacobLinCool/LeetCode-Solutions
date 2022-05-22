// 383. Ransom Note (4/12/53726)
// Runtime: 92 ms (77.67%) Memory: 41.11 MB (94.82%) 

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