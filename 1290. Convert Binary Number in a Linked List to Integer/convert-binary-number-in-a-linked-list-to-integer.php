// 1290. Convert Binary Number in a Linked List to Integer (12/8/2021)
// Runtime: 8 ms (72.22%) Memory: 15.56 MB (83.33%) 

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return Integer
     */
    function getDecimalValue($head) {
        $result = 0;
        
        while ($head != null) {
            $result <<= 1;
            $result += $head->val;
            $head = $head->next;
        }
        return $result;
    }
}