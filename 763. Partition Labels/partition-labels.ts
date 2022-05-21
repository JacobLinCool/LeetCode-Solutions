// 763. Partition Labels (3/21/2022)
// Runtime: 89 ms (70.59%) Memory: 44.23 MB (92.81%) 

function partitionLabels(s: string): number[] {
    const slices = [] as number[];
    
    let from = -1, to = -1;
    for (let i = 0; i < s.length; i++) {
        if (from === -1) {
            from = i;
        }
        
        to = Math.max(to, s.lastIndexOf(s[i]));
        
        if (i === to) {
            slices.push(to - from + 1);
            from = -1;
        }
    }
    
    return slices;
};