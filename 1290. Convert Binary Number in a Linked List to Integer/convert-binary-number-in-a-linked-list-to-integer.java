// 1290. Convert Binary Number in a Linked List to Integer (8/16/53904)
// Runtime: 0 ms (93.94%) Memory: 36.30 MB (93.00%) 

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int getDecimalValue(ListNode head) {
        var result = 0;
        
        while (head != null) {
            result <<= 1;
            result += head.val;
            head = head.next;
        }
        return result;
    }
}