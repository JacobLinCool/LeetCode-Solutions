// 2. Add Two Numbers (5/27/2021)
// Runtime: 12 ms (60.39%) Memory: 4.75 MB (4.80%) 

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    zero_node := &ListNode{ Val: 0 }
    
    list := &ListNode{ Val: 0 }
    
    pos := list
    
    first, sum, carry := true, l1.Val + l2.Val, 0
    for sum != 0 || l1.Next != nil || l2.Next != nil || first {
        first = false
        carry = sum / 10
        sum = sum % 10
        
        pos.Next = &ListNode{ Val: sum }
        pos = pos.Next
        
        if l1.Next != nil {
            l1 = l1.Next
        } else {
            l1 = zero_node
        }
        if l2.Next != nil {
            l2 = l2.Next
        } else {
            l2 = zero_node
        }
        
        sum = l1.Val + l2.Val + carry
    }
    
    return list.Next
}