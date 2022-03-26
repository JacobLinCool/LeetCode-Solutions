// 82. Remove Duplicates from Sorted List II (3/9/2022)
// Runtime: 95 ms (43.23%) Memory: 43.78 MB (90.22%) 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (!head) {
        return head;
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