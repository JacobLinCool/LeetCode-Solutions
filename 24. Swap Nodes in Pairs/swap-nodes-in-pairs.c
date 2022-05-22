// 24. Swap Nodes in Pairs (9/23/54097)
// Runtime: 0 ms (94.92%) Memory: 5.79 MB (73.34%) 

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* swapPairs(struct ListNode* head) {
    struct ListNode* second = head ? head->next : NULL;
    
    if (!second) {
        return head;
    }
    
    struct ListNode* next_head = swapPairs(second->next);
    head->next = next_head;
    second->next = head;
    
    return second;
}
