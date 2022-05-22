// 82. Remove Duplicates from Sorted List II (4/25/54155)
// Runtime: 64 ms (92.39%) Memory: 45.42 MB (11.96%) 

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    
    if (head.next && head.next.val === head.val) {
        while (head.next && head.next.val === head.val) {
            head = head.next;
        }
        return deleteDuplicates(head.next);
    } else {
        head.next = deleteDuplicates(head.next);
        return head;
    }
};