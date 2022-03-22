// 1663. Smallest String With A Given Numeric Value (3/23/2022)
// Runtime: 532 ms (0.00%) Memory: 69.06 MB (0.00%) 

function getSmallestString(n: number, k: number): string {
    const ans: string[] = [];
    
    const a = "a".charCodeAt(0);

    for (let i = n - 1; i >= 0; i--) {
        const code = a + (k - i >= 27 ? 25 : k - i - 1);
        ans[i] = String.fromCharCode(code);
        k -= code - a + 1;
    }

    return ans.join("");
};
