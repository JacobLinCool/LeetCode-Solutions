// 52. N-Queens II (5/29/2021)
// Runtime: 0 ms (94.44%) Memory: 1.92 MB (58.89%) 

import "fmt"

var result int
var queens_col [9]int
var n int

func abs(a int) int {
	if a < 0 {
		return -a
	} else {
		return a
	}
}

func attacked(row int, col int) bool {
	for i := 0; i < row; i++ {
		enemy_row, enemy_col := i, queens_col[i]
		relative_x, relative_y := abs(enemy_row-row), abs(enemy_col-col)

		if relative_x == relative_y || col == enemy_col {
			return true
		}
	}
	return false
}

func place_queen(row int) {
	if row == n {
		result++
	}

	for i := 0; i < n; i++ {
        if !attacked(row, i) {
			queens_col[row] = i
			place_queen(row + 1)
			queens_col[row] = -1
		}
	}
}

func totalNQueens(sn int) int {
    result = 0
    queens_col = [9]int{-1,-1,-1,-1,-1,-1,-1,-1,-1}
    n = sn

	place_queen(0)

	return result
}
