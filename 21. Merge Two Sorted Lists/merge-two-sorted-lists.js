// 21. Merge Two Sorted Lists (10/8/2021)
// Runtime: 84 ms (64.82%) Memory: 40.37 MB (88.74%) 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let hair = new ListNode();
    let tail = hair;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return hair.next;
}