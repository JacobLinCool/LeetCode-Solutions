// 1895. Largest Magic Square (6/12/2021)
// Runtime: 12 ms (77.78%) Memory: 6.56 MB (0.00%) 

// Go
func Min (a, b int) int {
 	if a < b {
 		return a
 	}
 	return b
} 

func largestMagicSquare(grid [][]int) int {
 	n, m := len(grid), len(grid[0])
 	pre := make([][][]int, n + 1)
 	for i := 0; i < n + 1; i++ {
 		pre[i] = make([][]int, m + 1)
 		for j := 0; j <= m; j++ {
 			pre[i][j] = make([]int, 4)
 		}
 	}
 	for i := 1; i <= n; i++ {
 		for j := 1; j <= m; j++ {
 			pre[i][j][0] = pre[i - 1][j][0] + grid[i - 1][j - 1]
 		}
 	}
 	for i := 1; i <= n; i++ {
 		for j := 1; j <= m; j++ {
 			pre[i][j][1] = pre[i][j - 1][1] + grid[i - 1][j - 1]
 		}
 	}
 	for i := 1; i <= n; i++ {
 		for j := 1; j <= m; j++ {
 			pre[i][j][2] = pre[i - 1][j - 1][2] + grid[i - 1][j - 1]
 		}
 	}
 	for i := 1; i <= n; i++ {
 		for j := m - 1; j >= 0; j-- {
 			pre[i][j][3] = pre[i - 1][j + 1][3] + grid[i - 1][j]
 		}
 	}
 	for p := Min(n ,m); p >= 2; p-- {
 		for i := 0; i + p <= n; i++ {
 			for j := 0; j + p <= m; j++ {
 				flag := true
 				s := -1
 				if pre[i + p][j + p][2] - pre[i][j][2] == pre[i + p][j][3] - pre[i][j + p][3] {
 					s = pre[i + p][j + p][2] - pre[i][j][2]
 				} else {
 					continue
 				}
 				for q := 1; q <= p; q++ {
 					if pre[i + p][j + q][0] - pre[i][j + q][0] != s || pre[i + q][j + p][1] - pre[i + q][j][1] != s{
 						flag = false
 						break
 					}
 				}
 				if flag {
 					return p
 				}
 			}
 		}
 	}
 	return 1
 }