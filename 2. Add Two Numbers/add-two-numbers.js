// 2. Add Two Numbers (5/27/2021)
// Runtime: 124 ms (69.98%) Memory: 44.15 MB (88.44%) 

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
var addTwoNumbers = function (l1, l2) {
    const zero_node = new ListNode(0, null);

    let list = new ListNode(undefined, null);

    let pos = list;

    let first = true,
        sum = l1.val + l2.val,
        carry = 0;
    while (sum || l1.next || l2.next || first) {
        first = false;
        carry = parseInt(sum / 10);
        sum = sum % 10;

        pos.next = new ListNode(sum, null);
        pos = pos.next;

        l1 = l1.next || zero_node;
        l2 = l2.next || zero_node;
        
        sum = l1.val + l2.val + carry;
    }

    return list.next;
};
