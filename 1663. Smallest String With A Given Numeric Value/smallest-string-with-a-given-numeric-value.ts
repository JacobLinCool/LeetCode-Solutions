// 1663. Smallest String With A Given Numeric Value (1/6/54192)
// Runtime: 153 ms (85.32%) Memory: 48.50 MB (86.24%) 

function getSmallestString(n: number, k: number): string {
    k -= n;
    const tail = "z".repeat(Math.floor(k / 25));
    const body = k % 25 === 0 ? "" : String.fromCharCode(k % 25 + 97);
    return (body + tail).padStart(n, "a");
};
