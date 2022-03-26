// 52. N-Queens II (5/29/2021)
// Runtime: 76 ms (77.18%) Memory: 38.63 MB (94.63%) 

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    // 這一題有個特點，就是他 n 只有 1 ~ 9 ，所以用 testcase 跑完就可以知道答案了 XD
    // return [1, 0, 0, 2, 10, 4, 40, 92, 352][n - 1];

    // 正確的方法是用遞迴跑完所有結果

    // 可行方法數
    let result = 0;

    // 皇后所在的行數
    const queens_col = Array(n).fill(-1);

    function valid(row, col) {
        // 確認該格是否可放
        for (let i = 0; i < row; i++) {
            // 第 i 列皇后位置
            const prev_row = i;
            const prev_col = queens_col[i];

            const relative_x = Math.abs(prev_row - row);
            const relative_y = Math.abs(prev_col - col);

            // relative_x === relative_y: 位於已放皇后之斜線上, prev_col === col: 位於已放皇后之同行
            if (relative_x === relative_y || prev_col === col) return false;
        }
        return true;
    }

    function place_queen(row) {
        // 最後一列可行的話（最深遞迴），可行方法數 += 1
        if (row === n) result++;

        for (let col = 0; col < n; col++) {
            // 去跑每行
            if (valid(row, col)) {
                // 如果那行可以放就放，然後找放這行接下來的可能性
                queens_col[row] = col;
                place_queen(row + 1);
                // 找完放這行的可能性之後要清掉，要不然下個 validation 可能會錯
                queens_col[row] = -1;
            }
        }
    }

    // 從第一列開始放皇后
    place_queen(0);

    return result;
};
