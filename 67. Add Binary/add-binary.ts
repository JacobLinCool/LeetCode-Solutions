// 67. Add Binary (3/21/2022)
// Runtime: 76 ms (78.72%) Memory: 45.57 MB (28.09%) 

function addBinary(a: string, b: string): string {
    let big_a = BigInt(0), big_b = BigInt(0);

    for (let i = 0; i < a.length; i++)
        big_a += BigInt(a[i]) << BigInt(a.length - i - 1);
    for (let i = 0; i < b.length; i++)
        big_b += BigInt(b[i]) << BigInt(b.length - i - 1);

    return (big_a + big_b).toString(2);
};
