// 2. Add Two Numbers (8/9/54157)
// Runtime: 112 ms (81.89%) Memory: 49.05 MB (12.29%) 

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const ans = new ListNode();
    
    let curr = ans,
        carry = 0;
    while (l1 || l2 || carry) {
        const sum = carry + (l1?.val || 0) + (l2?.val || 0);
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return ans.next;
};