// 206. Reverse Linked List (10/8/2021)
// Runtime: 76 ms (66.28%) Memory: 41.11 MB (90.43%) 

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
function reverseList(head) {
    return recv(head, null);

    function recv(node, prev) {
        if (node) {
            const next = node.next;
            node.next = prev;
            return recv(next, node);
        }
        return prev;
    }
}