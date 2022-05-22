// 682. Baseball Game (4/6/54243)
// Runtime: 4 ms (32.22%) Memory: 2.64 MB (61.08%) 

func calPoints(ops []string) int {
	records := make([]int, 0, len(ops))

	for _, op := range ops {
		switch op {
		case "+":
			records = append(records, records[len(records)-1]+records[len(records)-2])
		case "D":
			records = append(records, records[len(records)-1]*2)
		case "C":
			records = records[:len(records)-1]
		default:
			num, _ := strconv.Atoi(op)
			records = append(records, num)
		}
	}

	sum := 0
	for _, val := range records {
		sum += val
	}

	return sum
}
