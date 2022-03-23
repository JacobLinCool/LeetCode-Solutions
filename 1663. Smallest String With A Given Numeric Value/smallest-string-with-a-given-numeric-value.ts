// 1663. Smallest String With A Given Numeric Value (3/23/2022)
// Runtime: 153 ms (75.47%) Memory: 48.50 MB (84.91%) 

function getSmallestString(n: number, k: number): string {
    k -= n;
    const tail = "z".repeat(Math.floor(k / 25));
    const body = k % 25 === 0 ? "" : String.fromCharCode(k % 25 + 97);
    return (body + tail).padStart(n, "a");
};
