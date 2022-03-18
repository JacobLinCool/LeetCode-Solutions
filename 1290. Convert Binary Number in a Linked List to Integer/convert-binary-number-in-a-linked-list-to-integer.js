// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
// Runtime: 91 ms (31.85%) Memory: 38.52 MB (88.27%) 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    let result = 0;
    while(head) {
        result <<= 1;
        result += head.val;
        head = head.next;
    }
    return result;
};
