// 19. Remove Nth Node From End of List (6/17/53723)
// Runtime: 106 ms (13.41%) Memory: 40.22 MB (94.66%) 

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