// 876. Middle of the Linked List (10/2/2021)
// Runtime: 76 ms (56.40%) Memory: 38.98 MB (84.88%) 

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