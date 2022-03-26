// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers (5/27/2021)
// Runtime: 0 ms (94.25%) Memory: 6.49 MB (71.26%) 

func minPartitions(n string) int {
    result := '0'
    for _, c := range n {
        if c > result {
            result = c
        }
    }
    return int(result - '0')
}