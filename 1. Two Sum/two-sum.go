// 1. Two Sum (11/16/2021)
// Runtime: 4 ms (88.83%) Memory: 4.34 MB (21.83%) 

func twoSum(nums []int, target int) []int {
    table := make(map[int]int)
    
    for i := 0; i < len(nums); i++ {
        if val, exists := table[nums[i]]; exists {
            return []int{val, i}
            break
        }
        table[target - nums[i]] = i
    }
    return []int{0, 1}
}