// 44. Wildcard Matching (3/14/2022)
// Runtime: 8 ms (80.67%) Memory: 2.87 MB (85.71%) 

func isMatch(target string, pattern string) bool {
	target_idx, pattern_idx := 0, 0
	target_idx_retry, pattern_idx_retry := 0, 0

	for pattern_idx < len(pattern) || target_idx < len(target) {
		if pattern_idx < len(pattern) {
			c := pattern[pattern_idx]
			switch c {
			case '?':
				if target_idx < len(target) {
					pattern_idx++
					target_idx++
					continue
				}
			case '*':
				pattern_idx_retry = pattern_idx
				target_idx_retry = target_idx + 1
				pattern_idx++
				continue
			default:
				if target_idx < len(target) && target[target_idx] == c {
					pattern_idx++
					target_idx++
					continue
				}
			}
		}
        
		if 0 < target_idx_retry && target_idx_retry <= len(target) {
			pattern_idx = pattern_idx_retry
			target_idx = target_idx_retry
			continue
		}
		
		return false
	}

	return true
}