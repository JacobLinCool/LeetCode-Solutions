// 3. Longest Substring Without Repeating Characters (5/27/2021)
// Runtime: 8 ms (70.64%) Memory: 2.82 MB (68.50%) 

func lengthOfLongestSubstring(s string) int {
	solution := 0

	dict := make(map[byte]int)

	front, back := 0, 0
	for front = 0; front < len(s); front++ {
		if pos, exists := dict[s[front]]; exists {
			for back <= pos {
				delete(dict, s[back])
				back++
			}
		} else if front-back+1 > solution {
			solution = front - back + 1
		}
		dict[s[front]] = front
	}

	return solution
}