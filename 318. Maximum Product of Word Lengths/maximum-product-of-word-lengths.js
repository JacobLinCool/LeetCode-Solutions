// 318. Maximum Product of Word Lengths (5/27/2021)
// Runtime: 132 ms (82.35%) Memory: 46.50 MB (52.94%) 

/**
 * @param {string[]} words
 * @return {number}
 */

// 定義 bitmap 物件
// length 為原始字串長度, value 為 bitmap 值
class bm {
    constructor(string) {
        this.length = string.length;
        this.set(string);
    }

    set(string) {
        let v = 0;
        Array.from(new Set(string.split(""))).forEach((char) => {
            v += Math.pow(2, char.charCodeAt(0) - 97);
        });
        this.value = v;
    }
}

const maxProduct = function (words) {
    // 暫存最大值
    let max = 0;
    // 把 words 從 string 轉成上面定義的 bm
    words = words.map((word) => new bm(word));

    // 一一配對
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // 如果兩個 bm 做 bitwise AND 每項皆為 0 ，代表無碰撞，即為合法組，試圖更新暫存最大值
            if (!(words[i].value & words[j].value)) max = words[i].length * words[j].length > max ? words[i].length * words[j].length : max;
        }
    }
    return max;
};
