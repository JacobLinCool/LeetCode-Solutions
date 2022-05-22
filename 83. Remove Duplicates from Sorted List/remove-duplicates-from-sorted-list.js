// 83. Remove Duplicates from Sorted List (2/8/53732)
// Runtime: 88 ms (56.78%) Memory: 40.75 MB (93.48%) 

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
    let tail = head;
    while (tail) {
        while (tail.next && tail.val === tail.next.val) tail.next = tail.next.next;
        tail = tail.next;
    }
    return head;
}