// 82. Remove Duplicates from Sorted List II (4/24/54155)
// Runtime: 95 ms (36.02%) Memory: 43.78 MB (92.66%) 

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