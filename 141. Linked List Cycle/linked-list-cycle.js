// 141. Linked List Cycle (9/6/53727)
// Runtime: 119 ms (17.28%) Memory: 42.31 MB (93.69%) 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    const set = new Set();
    let tail = head;
    while(tail) {
        set.add(tail);
        if(set.has(tail.next)) return true;
        tail = tail.next;
    }
    return false;
};