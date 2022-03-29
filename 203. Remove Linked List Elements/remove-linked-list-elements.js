// 203. Remove Linked List Elements (10/4/2021)
// Runtime: 126 ms (22.59%) Memory: 43.35 MB (94.28%) 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    let hair = new ListNode(undefined, head);
    let node = hair;
    
    while(node.next) {
        if(node.next.val === val) {
            if(node.next.next) node.next = node.next.next;
            else node.next = null;
        } else node = node.next;
    }
    
    return hair.next;
};