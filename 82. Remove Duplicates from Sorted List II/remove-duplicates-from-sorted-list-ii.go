// 82. Remove Duplicates from Sorted List II (3/9/2022)
// Runtime: 3 ms (76.57%) Memory: 3.05 MB (55.38%) 

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    if head == nil {
        return nil;
    }
    
    if head.Next != nil && head.Next.Val == head.Val {
        for head.Next != nil && head.Next.Val == head.Val {
            head = head.Next;
        }
        return deleteDuplicates(head.Next);
    } else {
        head.Next = deleteDuplicates(head.Next);
        return head;
    }
}