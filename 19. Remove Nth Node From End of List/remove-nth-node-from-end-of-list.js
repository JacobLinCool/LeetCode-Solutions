// 19. Remove Nth Node From End of List (10/2/2021)
// Runtime: 106 ms (20.31%) Memory: 40.22 MB (84.45%) 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    let hair = new ListNode(0, head);
    let candidate_prev = hair, tail = head;
    for(let i = 1; i < n; i++) tail = tail.next;
    while(tail.next) {
        tail = tail.next;
        candidate_prev = candidate_prev.next;
    }
    candidate_prev.next = candidate_prev.next.next;
    
    return hair.next;
};