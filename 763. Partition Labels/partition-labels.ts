// 763. Partition Labels (10/14/54187)
// Runtime: 89 ms (65.57%) Memory: 44.23 MB (90.16%) 

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