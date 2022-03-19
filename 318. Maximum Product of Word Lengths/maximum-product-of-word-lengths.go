// 318. Maximum Product of Word Lengths (5/27/2021)
// Runtime: 12 ms (83.78%) Memory: 6.45 MB (67.57%) 

func maxProduct(words []string) int {
	size := len(words)
	base := 'a'

	bitmap := [1001]int{0}
	for i, word := range words {
		for _, char := range word {
			pos := char - base
			bitmap[i] |= 1 << pos
		}
	}

	max := 0
	for i := 0; i < size; i++ {
		for j := i + 1; j < size; j++ {
			if (bitmap[i]&bitmap[j]) == 0 && len(words[i])*len(words[j]) > max {
				max = len(words[i]) * len(words[j])
			}
		}
	}

	return max
}