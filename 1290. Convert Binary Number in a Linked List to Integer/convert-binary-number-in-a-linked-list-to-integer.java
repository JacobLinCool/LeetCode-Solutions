// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
// Runtime: 0 ms (94.14%) Memory: 36.30 MB (93.11%) 

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