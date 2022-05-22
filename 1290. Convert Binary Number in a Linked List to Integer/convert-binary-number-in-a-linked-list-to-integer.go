// 1290. Convert Binary Number in a Linked List to Integer (8/14/53904)
// Runtime: 0 ms (93.38%) Memory: 2.05 MB (0.00%) 

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getDecimalValue(head *ListNode) int {
    result := 0
    for head != nil {
        result <<= 1
        result += head.Val
        head = head.Next
    }
    return result
}