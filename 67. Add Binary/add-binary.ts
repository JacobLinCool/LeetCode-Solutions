// 67. Add Binary (7/18/54188)
// Runtime: 76 ms (78.57%) Memory: 45.57 MB (26.89%) 

function addBinary(a: string, b: string): string {
    let big_a = BigInt(0), big_b = BigInt(0);

    for (let i = 0; i < a.length; i++)
        big_a += BigInt(a[i]) << BigInt(a.length - i - 1);
    for (let i = 0; i < b.length; i++)
        big_b += BigInt(b[i]) << BigInt(b.length - i - 1);

    return (big_a + big_b).toString(2);
};
