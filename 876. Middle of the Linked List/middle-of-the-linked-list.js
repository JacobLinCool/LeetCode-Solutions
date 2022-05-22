// 876. Middle of the Linked List (4/18/53723)
// Runtime: 76 ms (46.99%) Memory: 38.98 MB (92.21%) 

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
function middleNode(head) {
    let middle = head, tail = head;
    for(let i = 1; true; i++) {
        if(tail.next) {
            tail = tail.next;
            if(i % 2) middle = middle.next;
        } else break;
    }
    return middle;
};