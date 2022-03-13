// 1899. Merge Triplets to Form Target Triplet (6/13/2021)
// Runtime: 220 ms (65.00%) Memory: 69.85 MB (55.00%) 

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    const n = triplets.length;
    let s = [0,0,0];
    for(let i = 0; i < 3; i++) {
        for(let p = 0; p < n; p++) {
            if(triplets[p][i] === target[i]) {
                let f = true;
                for(let j = 0; j < 3; j++) {
                    if(i === j) continue;
                    if(triplets[p][j] > target[j]) f = false;
                }
                if(f) s = [Math.max(s[0], triplets[p][0]), Math.max(s[1], triplets[p][1]), Math.max(s[2], triplets[p][2])];
                else continue;
                if(s[0] === target[0] && s[1] === target[1] && s[2] === target[2]) return true;
            }
        }
    }
    
    return false;
};