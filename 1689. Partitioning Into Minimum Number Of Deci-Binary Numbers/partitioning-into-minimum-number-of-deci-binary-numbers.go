// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers (6/19/53372)
// Runtime: 0 ms (94.81%) Memory: 6.49 MB (58.44%) 

func minPartitions(n string) int {
    result := '0'
    for _, c := range n {
        if c > result {
            result = c
        }
    }
    return int(result - '0')
}