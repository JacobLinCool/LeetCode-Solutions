// 1290. Convert Binary Number in a Linked List to Integer (8/10/53904)
// Runtime: 80 ms (53.97%) Memory: 40.79 MB (90.48%) 

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

function getDecimalValue(head: ListNode | null): number {
    let result = 0;
    while(head !== null) {
        result <<= 1;
        result += head.val;
        head = head.next;
    }
    return result;
};