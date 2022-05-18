// 36. Valid Sudoku (10/2/2021)
// Runtime: 121 ms (30.85%) Memory: 40.96 MB (95.00%) 

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    function validateBox(X, Y) {
        let s = new Set(), c = 0;
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++) 
                if(board[X*3 + i][Y*3 + j] !== ".") {
                    c++;
                    s.add(board[X*3 + i][Y*3 + j]);
                }
        return s.size === c;
    }
    function validateRow(n) {
        let s = new Set(), c = 0;
        for(let i = 0; i < 9; i++)
            if(board[n][i] !== ".") {
                c++;
                s.add(board[n][i]);
            }
        return s.size === c;
    }
    function validateCol(n) {
        let s = new Set(), c = 0;
        for(let i = 0; i < 9; i++)
            if(board[i][n] !== ".") {
                c++;
                s.add(board[i][n]);
            }
        return s.size === c;
    }
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if(!validateBox(i, j)) return false;
    for(let i = 0; i < 9; i++) 
        if(!validateRow(i)) return false;
    for(let i = 0; i < 9; i++) 
        if(!validateCol(i)) return false;
    return true;
};