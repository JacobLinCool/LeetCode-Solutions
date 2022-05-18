// 83. Remove Duplicates from Sorted List (10/6/2021)
// Runtime: 88 ms (57.19%) Memory: 40.75 MB (93.26%) 

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