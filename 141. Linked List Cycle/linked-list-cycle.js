// 141. Linked List Cycle (10/4/2021)
// Runtime: 119 ms (22.44%) Memory: 42.31 MB (87.82%) 

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