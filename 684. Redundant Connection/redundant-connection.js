// 684. Redundant Connection (6/26/2021)
// Runtime: 80 ms (75.19%) Memory: 41.41 MB (94.36%) 

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let par = Array.from({length: edges.length + 1}, (_,i) => i);
    const find = x => x === par[x] ? par[x] : par[x] = find(par[x]);
    const union = (x,y) => par[find(y)] = find(x);
    for (let [a,b] of edges) {
        if (find(a) === find(b)) return [a,b];
        else union(a,b);
    }
};